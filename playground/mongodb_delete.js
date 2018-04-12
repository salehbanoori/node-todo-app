//const express = require('express');
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect Mongodb Server.');
    }
    console.log('Connected to Mongodb Server.');

    // db.collection('Users').findOneAndDelete({_id: ObjectID('5ab124802bcd4c1b2c060900')}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({name: 'Ahmad'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({name: 'Ahmad'}, (err, result) => {
    //     console.log(result);
    // });

    db.close();
});