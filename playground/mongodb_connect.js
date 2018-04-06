//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  
  db.collection('Users').find({name: 'Ali'}).toArray().then((docs) => {

    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fatch data', err);
  });

  
  // Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Saleh Banoori',
  //   age: 25,
  //   location: 'Kohat, Pakistan'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }

  //   console.log(result.ops);
  // });

  db.close();
});