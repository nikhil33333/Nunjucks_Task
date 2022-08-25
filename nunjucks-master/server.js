const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const PORT = process.env.PORT || 4000;

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

const data = require("./data/data.json")
app.use(express.static(__dirname + '/assets'))
app.get('/', (req, res) => {
  res.render('main.html', {data: data});
});

