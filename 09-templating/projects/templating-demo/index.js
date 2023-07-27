const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data/data.json');

app.use(express.static(path.join(__dirname, '/public'))); // tells express to serve the contents of the public directory

app.set('view engine', 'ejs'); // tells express to use ejs as the view engine
app.set('views', path.join(__dirname, '/views')); // tells express where to find the views

app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const subredditData = redditData[subreddit];
  if (subredditData) {
    res.render('subreddit', { ...subredditData });
  } else {
    res.render('notfound', { subreddit, title: 'Not Found' });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
