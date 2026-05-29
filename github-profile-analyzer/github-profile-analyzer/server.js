const express = require("express");

const app = express();

const githubRoutes = require("./routes/githubRoutes");

app.use("/api", githubRoutes);

app.get("/", (req, res) => {
  res.send("GitHub Profile Analyzer API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});