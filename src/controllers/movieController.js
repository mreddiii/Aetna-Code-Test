const movieService = require('../services/movieService');

exports.getAllMovies = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const movies = await movieService.fetchAllMovies(page);
  res.json(movies);
};

exports.getMovieDetails = async (req, res) => {
  const { imdbId } = req.params;
  const movie = await movieService.fetchMovieDetails(imdbId);
  res.json(movie);
};

exports.getMoviesByYear = async (req, res) => {
  const { year } = req.params;
  const page = parseInt(req.query.page) || 1;
  const desc = req.query.sort === 'desc';
  const movies = await movieService.fetchMoviesByYear(year, page, desc);
  res.json(movies);
};

exports.getMoviesByGenre = async (req, res) => {
  const { genre } = req.params;
  const page = parseInt(req.query.page) || 1;
  const movies = await movieService.fetchMoviesByGenre(genre, page);
  res.json(movies);
};
