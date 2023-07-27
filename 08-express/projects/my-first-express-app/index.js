const express = require('express');
const app = express();

/* request and response objects */

// // runs anytime a request is received
// app.use((req, res) => {
//   // express turns http request data into objects: request and response
//   console.log('Request received');
//   res.send('Hello world!');
// });

/* routing basics */

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/cats', (req, res) => {
  res.send('🐈 Meow!');
});

app.post('/cats', (req, res) => {
  res.send('This is a POST request to /cats');
});

app.get('/dogs', (req, res) => {
  res.send('🐕 Woof!');
});

// // matches every request
// app.get('*', (req, res) => {
//   res.send(`${req.path} is not a valid path`);
// });

/* path parameters */

app.get('/r/:subreddit', (req, res) => {
  res.send(`This is the ${req.params.subreddit} subreddit!`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`Viewing the ${postId} post on the ${subreddit} subreddit`);
});

/* query strings */

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('Nothing found if nothing searched');
  } else {
    res.send(`Search results for: ${q}`);
  }
});

// listens for any incoming requests
app.listen(3000, () => {
  console.log('Listening on port 3000'); // prints when the server starts
});
