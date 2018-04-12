const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect Mongodb Server.');
    }
    console.log('Connected to Mongodb Server.');

    db.collection('Users').findOneAndUpdate({
        _id: ObjectID('5acc58cbc244236d0309a874')
    }, {
        $set: {
            name: 'Ahmad'
        }, $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });

    db.close();
});