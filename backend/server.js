const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/mongo");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'));

// Connexion DB
connectDB();

// Routes
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));