var express = require('express'),
    http    = require('http'),
    app     = express(),
    server  = http.createServer(app),
    io      = require('socket.io').listen(server);
//TODO
/*
 * Create the redis client. npm module is already
 * on package.json
 */

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

//TODO
/*
 * Get all fields and values from playerPositions hash key
 * If it's null, initialize the hash with these values
 * Use JSON.stringify() to store JS objects as JSON strings
 * Use JSON.parse() to convert JSON string to object
 */
var playerPositions = {
    player1: { x: 100, y: 200 },
    player2: { x: 100, y: 400 },
    player3: { x: 700, y: 200 },
    player4: { x: 700, y: 400 }
};

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
        //TODO
        /*
         * Update hash playerPositions with this position
         * Use hset instead of hmset because we are
         * updating one hash key
         * Use JSON.stringify() to store JS objects as JSON strings
         */
    });
});

server.listen(9000);
console.log('Listening on port 9000');
