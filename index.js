var express     = require('express'),
    http        = require('http'),
    app         = express(),
    server      = http.createServer(app),
    io          = require('socket.io').listen(server),
    redis       = require('redis'),
    redisClient = redis.createClient();

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));
app.set("view engine", "jade");
app.set("views", __dirname + "/views");

app.get('/about', function(req, res){
    res.render("about");
});

app.get('/credits', function(req, res){
    res.render("credits");
});

app.get('/players/new', function(req, res){
    res.render("players/new");
});

app.post('/players', function(req, res){
    var player = req.body.player;
    res.render("players/show", { player: player });
});

var playerPositions;

redisClient.hgetall("playerPositions", function (err, result) {
    playerPositions = result;

    if (playerPositions === null) {
        playerPositions = {
            player1: { x: 100, y: 200 },
            player2: { x: 100, y: 400 },
            player3: { x: 700, y: 200 },
            player4: { x: 700, y: 400 }
        };
        redisClient.hmset(['playerPositions', 
            'player1', JSON.stringify(playerPositions.player1),
            'player2', JSON.stringify(playerPositions.player2),
            'player3', JSON.stringify(playerPositions.player3),
            'player4', JSON.stringify(playerPositions.player4)
        ], function () {
        });
    } else {
        playerPositions.player1 = JSON.parse(playerPositions.player1);
        playerPositions.player2 = JSON.parse(playerPositions.player2);
        playerPositions.player3 = JSON.parse(playerPositions.player3);
        playerPositions.player4 = JSON.parse(playerPositions.player4);
    }
});

io.sockets.on('connection', function (socket) {
    socket.on('game started', function () {
        socket.emit('getPlayerPositions', playerPositions);
    });

    socket.on("player action", function (data) {
        socket.broadcast.emit("player action", data);
    });

    socket.on("player sit", function (data) {
        socket.broadcast.emit("player sit", data);
    });

    socket.on("player stand", function (data) {
        socket.broadcast.emit("player stand", data);
    });

    socket.on("player update position", function (data) {
        var playerId = data.playerId,
            position = data.playerPosition;

        playerPositions[playerId] = position;
        redisClient.hset('playerPositions', playerId, JSON.stringify(position), function () {
        });
    });
});

server.listen(9000);
console.log('Listening on port 9000');
