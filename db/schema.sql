-- Table: movies
CREATE TABLE movies (
  imdb_id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  release_date TEXT,
  budget INTEGER,
  runtime INTEGER,
  genres TEXT,
  original_language TEXT,
  production_companies TEXT
);

-- Table: ratings
CREATE TABLE ratings (
  imdb_id TEXT,
  average_rating REAL,
  FOREIGN KEY (imdb_id) REFERENCES movies(imdb_id)
);
