const axios = require("axios");

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

const fetchInfluencerTweets = async (req, res) => {
  const { username } = req.params;
  try {
    const response = await axios.get(`https://api.rettiwt.com/user-tweets`, {
      params: { username, count: 10 },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching tweets:", error.message);
    res.status(500).json({ error: "Failed to fetch tweets" });
  }
};

module.exports = { fetchInfluencerTweets };
