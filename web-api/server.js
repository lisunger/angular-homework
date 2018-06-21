const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.json());

app.listen(9000, err => {
  if (err) {
    throw err;
  }
  console.log('WebStore Service API listening on port 9000.');
});

const url = 'mongodb://localhost:27017/blogpost';

MongoClient.connect(
  url,
  function(err, client) {
    console.log('Connected successfully to server');

    app.locals.db = client.db('blogpost');
  }
);

app.post('/api/post', (req, resp) => {
  console.log(req.url);

  const post = req.body;

  let collection = app.locals.db.collection('posts');
  console.log('Inserting product:', post);
  collection
    .insertOne(post)
    .then(result => {
      if (result.result.ok && result.insertedCount === 1) {
        replaceId(post);
        const uri = req.baseUrl + '/' + post.id;
        console.log('Created Post: ', uri);
        resp
          .location(uri)
          .status(201)
          .json({ data: post });
      } else {
        error(req, resp, 400, `Error creating new post: ${post}`);
      }
    })
    .catch(err => {
      error(req, resp, 500, `Server error: ${err}`, err);
    });
});

replaceId = function (entity) {
  if(entity) {
    entity.id = entity._id;
    delete (entity._id);
  }
  return entity;
}

error = function (req, res, statusCode, message, error) {
  // development error handler
  // will print stacktrace
  if (req.get('env') === 'development') {
    res.status(statusCode || 500);
    res.json({
      'error': [{
        message,
        error: error || {}
      }]
    });
  } else {
    res.status(statusCode || 500);
    res.json({
      'error': [{
        message,
        error: {}
      }]
    });
  }
}
