// const MongoClient = require('mongodb').MongoClient;

const {MongoClient }= require('mongodb');

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
  collection.insertOne({
    text: 'To do something',
    completed: false
  }, (err, result) => {

    if (err) {
      return console.log('Unable to insert todo ', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));

  });

  db.collection('User').insertOne({
    _id:1234,
    Name: 'Teja Kanduri',
    age: 25,
    location: 'ST Louis'
  }, (err, result) => {
    if (err) {
      return console.log('Unble to generate the document with the error ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
