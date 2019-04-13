var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Number, required: true},
    
    maxMoviesId: {type: Number, required: true},
    maxMovieId: {type: Number, required: true}
});

module.exports = mongoose.model('Sequence', schema);