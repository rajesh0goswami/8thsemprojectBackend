const mongoose = require('mongoose');
const Schema = mongoose.Schema;


class Seat {
    constructor(available, occupiedby) {
        this.available = available;
        this.occupiedby = occupiedby;
    }
}
const movieSchema = new Schema({
    moviename: { type: String, required: true },
    imglink: { type: String, required: true },
    revinue: { type: Number, required: true },
    description: { type: String, required: true },
    releaseDate: { type: String, required: true },
    showTime: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },
    // A1: { type: String },
    Genre: { type: String, required: true },
    A1: {
        available: { type: Boolean },
        occupiedby: { type: String }
    },
    A2: {
        available: { type: Boolean },
        occupiedby: { type: String }
    },
    A3: {
        available: { type: Boolean },
        occupiedby: { type: String }
    },
    A4: {
        available: { type: Boolean },
        occupiedby: { type: String }
    },
    A5: {
        available: { type: Boolean },
        occupiedby: { type: String }
    },
    A6: {
        available: { type: Boolean },
        occupiedby: { type: String }
    },
    A7: {
        available: { type: Boolean },
        occupiedby: { type: String }
    },
    A8: {
        available: { type: Boolean },
        occupiedby: { type: String }
    },
    A9: {
        available: { type: Boolean },
        occupiedby: { type: String }
    },
    A10: {
        available: { type: Boolean },
        occupiedby: { type: String }
    }

}, {
    timestamps: true,
});
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;