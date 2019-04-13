var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    year: {type: String},
    genre: {type: String},
    date: {type: String}, 
    group: {type: Schema.Types.ObjectId, ref: "Movie"}
})

module.exports = mongoose.model('Movie', schema);
