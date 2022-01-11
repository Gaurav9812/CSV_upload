const mongoose=require('mongoose');
const id=require('./idPass');

mongoose.connect(`mongodb+srv://${id.id}:${id.password}@cluster0.pooba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
const db=mongoose.connection;

//if some error occured while connecting to database
db.on('error',console.error.bind(console,"Error connecting to Mongo db"));

//if scuccessfully connected to database
db.once('open',function(){
        console.log("connected to database :: mongo db");
});

module.exports=db;