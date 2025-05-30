const express = require("express");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();

app.use(express.json());

connectDB();

// mount to routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/blog", require("./routes/blogRoutes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOME for bLOG</h1>`);
});
