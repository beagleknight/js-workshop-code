var express = require('express'),
    http    = require('http'),
    app     = express(),
    server  = http.createServer(app),
    io      = require('socket.io').listen(server);

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

    //TODO
    /*
     * Bind 'player action' event and broadcast the same
     * event to all clients with the same data
     */

    //TODO
    /*
     * Bind 'player sit' event and broadcast the same
     * event to all clients with the same data
     */

    //TODO
    /*
     * Bind 'player stand' event and broadcast the same
     * event to all clients with the same data
     */

    //TODO
    /*
     * Bind 'player update position' and update the
     * playerPositions object
     */

    //TODO
    /*
     * Remove the following code, it's just a HelloWorld
     * for test purpouses
     */
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

server.listen(9000);
console.log('Listening on port 9000');
