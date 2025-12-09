const dataP = require('./paintingProvider.js');
const dataA = require('./artistProvider.js');
const dataG = require('./galleryProvider.js');

const handleAllPaintings = app => {
	app.get('/api/paintings', (req, resp) => {resp.json(dataP)});
};

const handleById = app => {
	app.get('/api/painting/:id', (req, resp) => {
		const matches = dataP.filter(p => p.paintingID == req.params.id);
		if (matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message":"no paintings for provided id"});
	});
};

const handleByGalleryId = app => {
	app.get('/api/painting/gallery/:id', (req, resp) => {
		const matches = dataP.filter(p => p.gallery.galleryID == req.params.id);
		if (matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message":"no paintings for provided gallery id"});
	});
};

const handleByArtistId = app => {
	app.get('/api/painting/artist/:id', (req, resp) => {
		const matches = dataP.filter(p => p.artist.artistID == req.params.id);
		if (matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message":"no paintings for provided artist id"});
	});
};

const handleByYears = app => {
	app.get('/api/painting/year/:min/:max', (req, resp) => {
		const matches = dataP.filter(p => (p.yearOfWork >= req.params.min && p.yearOfWork <= req.params.max));
		if (matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message":"no paintings for provided year range"});
	});
};

const handleByTitle = app => {
	app.get('/api/painting/title/:text', (req, resp) => {
		const matches = dataP.filter(p => (p.title.toLowerCase().includes(req.params.text.toLowerCase())));
		if (matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message":"no paintings for provided title"});
	});
};

const handleByColor = app => {
	app.get('/api/painting/color/:color', (req, resp) => {
		const matches = dataP.filter(p => (p.details.annotation.dominantColors.some(c => c.name.toLowerCase() == req.params.color.toLowerCase())));
		if (matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message":"no paintings for provided color"});
	});
};

const handleAllArtists = app => {
	app.get('/api/artists', (req, resp) => {resp.json(dataA)});
};

const handleArtistsByCountry = app => {
	app.get('/api/artists/:country', (req, resp) => {
		const matches = dataA.filter(a => (a.Nationality.toLowerCase() == req.params.country.toLowerCase()));
		if (matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message":"no artists for provided country"});
	});
};

const handleAllGalleries = app => {
	app.get('/api/galleries', (req, resp) => {resp.json(dataG)});
};

const handleGalleriesByCountry = app => {
	app.get('/api/galleries/:country', (req, resp) => {
		const matches = dataG.filter(g => (g.GalleryCountry.toLowerCase() == req.params.country.toLowerCase()));
		if (matches.length > 0)
			resp.json(matches);
		else
			resp.json({"message":"no galleries for provided country"});
	});
};

module.exports = {
	handleAllPaintings, handleById, handleByGalleryId, handleByArtistId, handleByYears, handleByTitle, handleByColor, handleAllArtists, handleArtistsByCountry, handleAllGalleries, handleGalleriesByCountry
}