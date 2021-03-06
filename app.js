const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');

const expressValidator =  require('express-validator');
require("dotenv").config()

//import
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const categoryRoutes = require('./routes/category.js');


//app
const app = express()

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());


app.use('/api',authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);

mongoose.connect(process.env.DATABASE,{

	useNewUrlParser:true,
	useCreateIndex:true
}).then(()=>{
	console.log("DB connected !");
})

const port = process.env.PORT || 8000;


app.listen(port,()=>{
	console.log(`Server is running on port ${port}`);
})


