const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()

//import
const userRoutes = require('./routes/user.js');


//app
const app = express()

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