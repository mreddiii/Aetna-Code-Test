-- Seed movie records
INSERT INTO movies VALUES 
('tt0111161', 'The Shawshank Redemption', 'Two imprisoned men bond over years...', '1994-09-23', 25000000, 142, 'Drama', 'en', 'Castle Rock Entertainment'),
('tt0068646', 'The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire...', '1972-03-24', 6000000, 175, 'Crime,Drama', 'en', 'Paramount Pictures'),
('tt0468569', 'The Dark Knight', 'When the menace known as the Joker wreaks havoc...', '2008-07-18', 185000000, 152, 'Action,Crime,Drama', 'en', 'Warner Bros. Pictures'),
('tt0109830', 'Forrest Gump', 'The presidencies of Kennedy and Johnson through the eyes of Forrest...', '1994-07-06', 55000000, 142, 'Drama,Romance', 'en', 'Paramount Pictures'),
('tt1375666', 'Inception', 'A thief who steals corporate secrets through dream-sharing...', '2010-07-16', 160000000, 148, 'Action,Adventure,Sci-Fi', 'en', 'Warner Bros. Pictures');

-- Seed rating records
INSERT INTO ratings VALUES 
('tt0111161', 9.3),
('tt0068646', 9.2),
('tt0468569', 9.0),
('tt0109830', 8.8),
('tt1375666', 8.7);
