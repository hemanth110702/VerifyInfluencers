const express = require("express");
const { fetchInfluencerTweets } = require("../controllers/twitter");
const router = express.Router();

router.get("/:username", fetchInfluencerTweets);

module.exports = router;
