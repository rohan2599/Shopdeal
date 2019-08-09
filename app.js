const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()

//app
const app = express()

//routes
app.get("/",(req,res)=>{

		res.send("Hello everyone");
})

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