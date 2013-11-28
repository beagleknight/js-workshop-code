var express = require('express'),
    app     = express();

// TODO
/*
 * Add the bodyParser middleware
 */
app.use(express.static(__dirname + '/public'));
app.set("view engine", "jade");
app.set("views", __dirname + "/views");

app.get('/about', function(req, res){
    res.render("about");
});

// TODO
/*
 * Define a route for credits page in the same way as
 * the previous about page
 * /

// TODO
/*
 * Define a route for GET /players/new
 * In the view render a simple form with action to '/players' using
 * POST http method.
 */

// TODO
/*
 * Define a route for POST /players
 * Grab the form parameters using req.body
 * Render players/show view passing the same parameters.
 */

app.listen(9000);
console.log('Listening on port 9000');
