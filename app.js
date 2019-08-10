const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
cconst bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
require("dotenv").config()

//import
const userRoutes = require('./routes/user.js');


//app
const app = express()

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware

app.use('/user',userRoutes);

//db
mongoose.connect(process.env.DATABASE,{

	useNewUrlParser:true,
	useCreateIndex:true
}).then(()=>{
	console.log("DB connected !");
})

const port = process.env.PORT || 8000;


app.listen(port,()=>{
	console.log(`Server is running on port  ${port}`);
})