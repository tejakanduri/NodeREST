// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

// Connection URL
var url = 'mongodb://localhost:27017/TodoApp';

// var user = {name:'teja kanduri', age:27};
// var {name} = user; // object destructing

// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log("Connected correctly to server");

  // Get the documents collection
  var collection = db.collection('TodoApp');
  collection.find({_id: new ObjectId('592386cea95a36200cf54bed')}).toArray((err, docs) => {

    if (err) {
      return console.log('Unable to insert todo ', err);
    }

    console.log(JSON.stringify(docs, undefined, 2));

  });

  var collection = db.collection('TodoApp');
  collection.find().count().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to insert todo ', err);
  });

  db.close();
});
