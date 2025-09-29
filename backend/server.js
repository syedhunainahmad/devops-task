const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const postsRouter = require('./routes/first');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/backend";


mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
  })
  .catch(err => console.error("MongoDB connection error:", err));
