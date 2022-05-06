var express = require('express');
var router = express.Router();


router.get("/", async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        //const result = await req.models.merch.getMerch(body.merch);
        res.status(200).json(results);
    } catch(err) {
        console.error("Failed to get merch:", err);
        res.status(500).json({message: err.message});
    }
    next();
})

module.exports = router;