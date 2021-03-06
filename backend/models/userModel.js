import mongoose from 'mongoose';

const Schema = mongoose.Schema; // holds schema from mongoose

const UserSchema = new Schema({ // values for DB
	firstName:{
		type: String, // String, Array, boolean, number etc
		required: true
	},
	lastName:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	phone:{
		type: Number
	},
	isOwner:{
		type: Boolean,
		default: false // most users arent owners
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model("users", UserSchema);

module.exports = User;