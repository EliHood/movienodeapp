var express = require ('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
// ROutes

// home
app.get('/',routes.home);


// movie_single

app.get('/game_of_thrones/:episode_number?', routes.movie_single);



// not found

app.get('*',routes.notfound);



var port= Number(process.env.PORT || 3000);

//for heroku
