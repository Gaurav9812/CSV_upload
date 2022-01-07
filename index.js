const express=require('express');

const port =8000;
const app=express();

const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
let ejs = require('ejs');

//to cvert form data
app.use(express.urlencoded());


app.use(expressLayouts);

//for extraccting scripts and styles from particular ejs
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//setting up view engine
app.set('view engine','ejs');
app.set('views','./Views');

//path to static files    
app.use(express.static('./Assets'));

//to ROUTES
app.use('/',require('./Routes/index'));

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`error in setting up server`);
        return ;
    }
    console.log(`server is running on port :${port}`);
});