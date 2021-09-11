const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //ES6 - Promise

// Connection With MongoDb
// With Database mongotube
mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });


mongoose.connection //Once and on are listeners for events.They are also promises but they are used in part of database.
    .once('open', () => console.log('Connected')
    )
    .on('error', (error) => {
        console.log("Your Error", error);
    });