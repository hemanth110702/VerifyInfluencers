const express = require('express');
const cors = require('cors');
const influencerRoutes = require("./routes/influencer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/influencer", influencerRoutes);

app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`));

