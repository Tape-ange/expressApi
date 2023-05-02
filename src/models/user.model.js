const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	permissionLevel: Number
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;