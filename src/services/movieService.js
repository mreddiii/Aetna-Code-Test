const db = require('../utils/db');
const PAGE_SIZE = 50;

function paginateQuery(baseQuery, page) {
  const offset = (page - 1) * PAGE_SIZE;
  return `${baseQuery} LIMIT ${PAGE_SIZE} OFFSET ${offset}`;
}

exports.fetchAllMovies = (page) => {
  const query = paginateQuery(`
    SELECT imdb_id, title, genres, release_date, 
           printf("$%.2f", budget / 100.0) AS budget 
    FROM movies
  `, page);

  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

exports.fetchMovieDetails = (imdbId) => {
  const query = `
    SELECT m.imdb_id, m.title, m.description, m.release_date,
           printf("$%.2f", m.budget / 100.0) AS budget, m.runtime,
           m.genres, m.original_language, m.production_companies,
           r.average_rating
    FROM movies m
    LEFT JOIN ratings r ON m.imdb_id = r.imdb_id
    WHERE m.imdb_id = ?
  `;

  return new Promise((resolve, reject) => {
    db.get(query, [imdbId], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

exports.fetchMoviesByYear = (year, page, desc) => {
  const order = desc ? 'DESC' : 'ASC';
  const query = paginateQuery(`
    SELECT imdb_id, title, genres, release_date, 
           printf("$%.2f", budget / 100.0) AS budget 
    FROM movies
    WHERE strftime('%Y', release_date) = '${year}'
    ORDER BY release_date ${order}
  `, page);

  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

exports.fetchMoviesByGenre = (genre, page) => {
  const query = paginateQuery(`
    SELECT imdb_id, title, genres, release_date, 
           printf("$%.2f", budget / 100.0) AS budget 
    FROM movies
    WHERE genres LIKE '%${genre}%'
  `, page);

  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};
