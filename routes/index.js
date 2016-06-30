
var moviesJSON = require('../movies.json');
//exporting routing functionality from app.js
//HOME
exports.home = function(request,response){
  var movies = moviesJSON.movies;

  response.render('home',{
    title: "Star Wars Movies",
    movies: movies
  });
};
//movie_single
exports.movie_single = function(request,response){
  var episode_number = request.params.episode_number;
  response.send("this is page for episode " + episode_number);
}

exports.notFound = function(request,response){
  response.send("This is incorrect page")
};
