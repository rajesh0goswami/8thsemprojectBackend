const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    moviename: { type: String, required: true },
    imglink: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: String, required: true },
    showTime: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
});
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;