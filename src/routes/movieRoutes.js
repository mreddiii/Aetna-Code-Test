const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/movies', movieController.getAllMovies);
router.get('/movies/:imdbId', movieController.getMovieDetails);
router.get('/year/:year', movieController.getMoviesByYear);
router.get('/genre/:genre', movieController.getMoviesByGenre);

module.exports = router;
