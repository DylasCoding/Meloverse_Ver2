const express = require('express');
const { getTopSongs } = require('../controllers/TopSongController');
const { getSongsWithArtistAndFollowers } = require('../controllers/getSongsWithArtistAndFollowers');
const { getSongByGenre } = require('../controllers/getSongByGenreController');

const router = express.Router();

router.get('/top-songs', getTopSongs);
router.get('/', getSongsWithArtistAndFollowers);
router.get('/genres/:genre', getSongByGenre);

module.exports = router;