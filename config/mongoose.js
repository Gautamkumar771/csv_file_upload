// IMPORTING PACKAGE
const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/csv_upload');

// aqure the connection to check it is sucessful
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, "error connecting to mongodb"));

// up and running then print the msg
db.once('open',function(){
    console.log('connected to database :: mongodb');
});

module.exports = db;




// MAKING CONNECTION 

// mongoose.connect('mongodb://127.0.0.1:27017/csv_upload');
// const DB = 'mongodb+srv://himadrinayak:12345@cluster0.h7n86ah.mongodb.net/csv-upload?retryWrites=true&w=majority';

// mongoose.connect(DB).then(()=>{
//     console.log('Connection successful!');
// }).catch((err) => console.log("no connection " + err));

// //setting it to db
// const db = mongoose.connection;

// // CHECKING CONNECTION
// //if error occurs
// db.on("error", console.error.bind(console, "Error connecting to DB"));
// // when db connects successfully
// db.once("open", function(){
//     console.log("Successfully connected to DB");
// });

