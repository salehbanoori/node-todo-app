var {mongoose} = require('./../server/db/mongoose');
var {User} = require('./../server/models/user');

var id = '5accfbde5b637c0d3cc5fefa';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));