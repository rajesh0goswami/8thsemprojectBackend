const router = require('express').Router();
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
    Movie.find()
        .then(movies => res.json({
            message: "Data Fetched",
            movie: movies
        })).catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const moviename = req.body.moviename;
    const imglink = req.body.imglink;
    const revinue = req.body.revinue;
    const description = req.body.description;
    const price = Number(req.body.price);
    const date = Date.parse(req.body.date);
    const releaseDate = req.body.releaseDate;
    const showTime = req.body.showTime;
    const A1 = req.body.A1;
    const A2 = req.body.A2;
    const A3 = req.body.A3;
    const A4 = req.body.A4;
    const A5 = req.body.A5;
    const A6 = req.body.A6;
    const A7 = req.body.A7;
    const A8 = req.body.A8;
    const A9 = req.body.A9;
    const A10 = req.body.A10;

    const newMovie = new Movie({
        moviename,
        revinue,
        imglink,
        description,
        releaseDate,
        showTime,
        price,
        date,
        A1,
        A2,
        A3,
        A4,
        A5,
        A6,
        A7,
        A8,
        A9,
        A10,
    });

    newMovie.save()
        .then(() => res.json({ message: 'Movie added!' }))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Movie.findById(req.params.id)
        .then(movie => res.json({ message: "Data Fetched", movie: movie }))
        .catch(err => res.status(400).json('error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.json('Movie deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/update/:id').patch((req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            // movie.moviename = req.body.moviename;
            // movie.imglink = req.body.imglink;
            // movie.description = req.body.description;
            // movie.releaseDate = req.body.releaseDate;
            // movie.showTime = req.body.showTime;
            // movie.price = req.body.price;
            // movie.date = Date.parse(req.body.date);
            movie.revinue = req.body.revinue;
            movie.A1.available = req.body.A1.available;
            movie.A1.occupiedby = req.body.A1.occupiedby;
            movie.A2.available = req.body.A2.available;
            movie.A2.occupiedby = req.body.A2.occupiedby;
            movie.A3.available = req.body.A3.available;
            movie.A3.occupiedby = req.body.A3.occupiedby;
            movie.A4.available = req.body.A4.available;
            movie.A4.occupiedby = req.body.A4.occupiedby;
            movie.A5.available = req.body.A5.available;
            movie.A5.occupiedby = req.body.A5.occupiedby;
            movie.A6.available = req.body.A6.available;
            movie.A6.occupiedby = req.body.A6.occupiedby;
            movie.A7.available = req.body.A7.available;
            movie.A7.occupiedby = req.body.A7.occupiedby;
            movie.A8.available = req.body.A8.available;
            movie.A8.occupiedby = req.body.A8.occupiedby;
            movie.A9.available = req.body.A9.available;
            movie.A9.occupiedby = req.body.A9.occupiedby;
            movie.A10.available = req.body.A10.available;
            movie.A10.occupiedby = req.body.A10.occupiedby;
            movie.save()
                .then(() => res.json('Movie updated'))
                .catch(err => res.status(400).json('Error : ' + err));
        })
        .catch(err => res.status(400).json('Error:' + err));
})
router.route('/update1/:id').put((req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            movie.moviename = req.body.moviename;
            movie.imglink = req.body.imglink;
            movie.description = req.body.description;
            movie.releaseDate = req.body.releaseDate;
            movie.showTime = req.body.showTime;
            movie.price = req.body.price;
            movie.date = Date.parse(req.body.date);
            movie.A1.available = req.body.A1.available;
            movie.A1.occupiedby = req.body.A1.occupiedby;
            movie.A2.available = req.body.A2.available;
            movie.A2.occupiedby = req.body.A2.occupiedby;
            movie.A3.available = req.body.A3.available;
            movie.A3.occupiedby = req.body.A3.occupiedby;
            movie.A4.available = req.body.A4.available;
            movie.A4.occupiedby = req.body.A4.occupiedby;
            movie.A5.available = req.body.A5.available;
            movie.A5.occupiedby = req.body.A5.occupiedby;
            movie.A6.available = req.body.A6.available;
            movie.A6.occupiedby = req.body.A6.occupiedby;
            movie.A7.available = req.body.A7.available;
            movie.A7.occupiedby = req.body.A7.occupiedby;
            movie.A8.available = req.body.A8.available;
            movie.A8.occupiedby = req.body.A8.occupiedby;
            movie.A9.available = req.body.A9.available;
            movie.A9.occupiedby = req.body.A9.occupiedby;
            movie.A10.available = req.body.A10.available;
            movie.A10.occupiedby = req.body.A10.occupiedby;
            movie.save()
                .then(() => res.json('Movie updated'))
                .catch(err => res.status(400).json('Error : ' + err));
        })
        .catch(err => res.status(400).json('Error:' + err));
})
module.exports = router;