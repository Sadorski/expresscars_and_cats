var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(`${__dirname}/static`)));
app.set('views', path.join(`${__dirname}/views`));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
})
app.get('/cats', function(req, res){
    res.render('cats')
})
app.get('/cats/1', function(req, res){
    var cat = {
        name: 'fluffy',
        favorite_food: 'spaghetti',
        source: "/images/notrealcat.png",
        hobbies: ['Limbo', 'Taunting', 'Knocking on door while you are trying to sleep']
    } 

    res.render('details', {cat: cat});
})
app.get('/cats/2', function(req, res){
    var cat = {
        name: 'notsofluffy',
        source: "/images/omgkitty.jpg",
        favorite_food: 'pizza',
        hobbies: ['wants to feel loved', 'needs mo attention', 'Knocking on door while you are trying to sleep']
    } 
    res.render('details', {cat: cat});
})

app.get('/cars/new', function(req, res){
    res.render('form')
})
app.listen(8000, function(){
    console.log("How ya doing on 8000?");
})