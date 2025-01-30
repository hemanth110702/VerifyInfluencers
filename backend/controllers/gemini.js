const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const extractClaims = async (tweets) => {
  try {
    const response = await axios.post(
      "https://api.gemini.com/extract-claims", 
      {
        input: tweets.map((tweet) => tweet.text).join("\n"),
        model: "gemini-1.0", 
      },
      {
        headers: {
          Authorization: `Bearer ${GEMINI_API_KEY}`,
        },
      }
    );

    return response.data.claims; 
  } catch (error) {
    console.error("Error extracting claims:", error.message);
    throw new Error("Claim extraction failed");
  }
};

module.exports = { extractClaims };
