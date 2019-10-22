const User = require("../models/user");


exports.userById = (req,res,next,id)=>{

	User.findById(id).exec((err,user)=>{

		if(err || !user){
			return res.status(400).json({
				error:"User with given ID not found"
			})
		}

		req.profile = user;
		next();
	})
}