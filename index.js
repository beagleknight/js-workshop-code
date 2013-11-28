var express = require('express'),
    app     = express();

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

app.listen(9000);
console.log('Listening on port 9000');
