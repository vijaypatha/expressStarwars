var express = require('express'); //requiring express (module) framework

var app = express();//creating a new express application. app has all express methods (get,set etc)

console.log("hello"); //node app.js

// VIEW ENINGINE for ejs temmplateing

app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname,'public'))); //teling node to access this directory to get me assets (saves time to mention routes)

var routes = require('./routes');

app.get('/',routes.home);
app.get('/star_wars_episode/:episode_number?',routes.movie_single);
app.get('*',routes.notFound);

app.listen(3000,function(){ //display on the browser for all routes
  console.log("The app is running on local host 3000"); // log on the termnial
});


//Route binding some funtionalty when user requests certain address in a applicaiton

//home Route 1
// app.get('/',function(request,response){
//   //get method of express
//   //get server expects request from client
//   //get response from server
//
//   // response.send("This is a server response from the home page"); //server response
//
//   response.render('home',{
// //express gives you ability to pass information to the template. //passing object in render method and access it on the template.
// //passing in information from our route.
// //loop throug
//     title:"Star Wars Movies",
// movies: ["The First Movie","The Second Movie", "The Thrid Movie"]
//   });
// });
//
// //Darth Route 2
// app.get('/darth',function(request,response){
//   response.send("This is a server response from the darth page");
// });
//
// //movie_single
//
// app.get('/star_wars_episode/:episode_number?',function(request,response){
//   // QUESTION: explain nature of :episode_number can be accessed via  a variable (param of request)
//
//   var episode_number = request.params.episode_number;
//
//   response.send("This is the page for episode " + episode_number);
//
// });
//
// //notFound
// app.get('*',function(request,response){
//   response.send("This is incorrect page")
// });
//
// app.listen(3000,function(){ //display on the browser for all routes
//   console.log("The app is running on local host 3000"); // log on the termnial
// }); //node app.js
//
//
// //EJS temmplateing in express. One template for all routes.
// //specified VIEW ENINGINE
