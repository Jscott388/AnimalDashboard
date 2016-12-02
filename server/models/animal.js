var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
 name: String,
 weight: Number,
 lifespan: Number,
 habbitat: String
});
mongoose.model('Animal', AnimalSchema);
