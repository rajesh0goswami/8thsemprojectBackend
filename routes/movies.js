const router = require('express').Router();
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
    Movie.find()
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const moviename = req.body.moviename;
    const imglink = req.body.imglink;
    const description = req.body.description;
    const price = Number(req.body.price);
    const date = Date.parse(req.body.date);
    const releaseDate = req.body.releaseDate;
    const showTime = req.body.showTime;


    const newMovie = new Movie({
        moviename,
        imglink,
        description,
        releaseDate,
        showTime,
        price,
        date,
    });

    newMovie.save()
        .then(() => res.json('Movie added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Movie.findById(req.params.id)
        .then(movie => res.json(movie))
        .catch(err => res.status(400).json('error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.json('Movie deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/update/:id').post((req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            movie.moviename = req.body.moviename;
            movie.imglink = req.body.imglink;
            movie.description = req.body.description;
            movie.releaseDate = req.body.releaseDate;
            movie.showTime = req.body.showTime;
            movie.price = req.body.price;
            movie.date = Date.parse(req.body.date);

            movie.save()
                .then(() => res.json('Exercise updated'))
                .catch(err => res.status(400).json('Error : ' + err));
        })
        .catch(err => res.status(400).json('Error:' + err));
})
module.exports = router;