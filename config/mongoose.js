var config = require('./config'),
 mongoose = require('mongoose');
module.exports = function() {
 // var db = mongoose.connect(config.db);
 var db = mongoose.connect(config.db[process.env.NODE_ENV].uri, config.db[process.env.NODE_ENV].options, function (err) {
    if (err) {
        console.error('Could not connect to MongoDB.');
        console.log(err);
    }
});
 require('../app/features/models/user.server.model');
 return db;
};