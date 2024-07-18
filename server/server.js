const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

//serving the static files from the frontend build dist folder
app.use(express.static("../client/dist"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML routes
require("./routes/htmlRoutes")(app);

// Handling  other route in case
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
