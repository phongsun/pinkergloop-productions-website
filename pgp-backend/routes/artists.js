var express = require('express');
var router = express.Router();


router.get("/", async (req, res, next) => {
    try {
        const body = req.body;
        const results = await req.models.artist.getArtists();
        res.status(200).json(results);
    } catch(err) {
        console.error("Failed to get artists:", err);
        res.status(500).json({message: err.message});
    }
    next();
})

module.exports = router;