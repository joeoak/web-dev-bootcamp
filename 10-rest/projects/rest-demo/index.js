const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true })); // for parsing urlencoded data
app.use(express.json()); // for parsing json data
app.use(methodOverride('_method'));

let comments = [
  {
    id: uuid(),
    username: 'GamerGirl123',
    comment: 'I love playing video games all day!',
  },
  {
    id: uuid(),
    username: 'FoodieFanatic',
    comment: "That recipe looks amazing, I can't wait to try it!",
  },
  {
    id: uuid(),
    username: 'FitnessFreak',
    comment: 'I just finished a 10k run, feeling great!',
  },
  {
    id: uuid(),
    username: 'MovieBuff',
    comment: "This movie was so good, I'm definitely watching it again!",
  },
];

// GET /comments - lists all comments
// GET /comments/:id - get one comment (using ID)
// DELETE /comments/:id - delete one comment
// POST /comments - create a new comment
// PATCH /comments/:id - update one comment

app.get('/', (req, res) => {
  res.send('<a href="/comments">/comments</a>');
});

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render('comments/edit', { comment });
});

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id); // new array without the deleted comment
  res.redirect('/comments');
});

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const comment = comments.find((c) => c.id === id);
  comment.comment = newComment;
  res.redirect('/comments');
});

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ id: uuid(), username, comment });
  res.redirect('/comments');
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
