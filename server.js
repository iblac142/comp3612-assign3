const express = require('express');
const app = express();

const path = require('path');
app.use('/static',express.static(path.join(__dirname,'public')));

const router = require('./scripts/router.js');

router.handleAllPaintings(app);
router.handleById(app);
router.handleByGalleryId(app);
router.handleByArtistId(app);
router.handleByYears(app);
router.handleByTitle(app);
router.handleByColor(app);
router.handleAllArtists(app);
router.handleArtistsByCountry(app);
router.handleAllGalleries(app);
router.handleGalleriesByCountry(app);

http = require("http")
const server = http.createServer((req, resp) => {
})


