
const User = require('../models/user');
const {errorHandler} = require('../helpers/dbErrorHandlers');
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req,res)=>{

	console.log(req.body);
	const user = new User(req.body);
	user.save((err,user)=>{
		if(err){
			return res.status(400).json({
				error :errorHandler(err)
			})
		}
		user.salt = undefined;
		user.hashed_passsword= undefined;

		res.json(user)
	})

}


exports.signin = (req,res)=>{
  
  const {email,password} = req.body;

  User.findOne({email},(err,user)=>{

  	if(err || !user){
  		return res.status(400).json({
  			err:"User with that email does not exists"
  		})
  	}

  	if(!user.authenticate(password)){
  		return res.status(401).json({
  			error:"Email and password don't match"
  		})
  	}

  	const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
  	res.cookie('t',token, {expire:new Date()+99999});
  	const {_id,name,email,role} = user;

  	return res.json({token , user:{_id,email,name,role}});

  });

}