const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todolistSchema = new Schema({
	name: { type: String, min: 1 }
	// TODO insert all fields
});

module.exports = mongoose.model('todolist', todolistSchema);