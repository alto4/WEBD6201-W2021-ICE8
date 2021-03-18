// Import pre-bundled node modules
import fs = require("fs");
import path = require("path");

// Import 3rd party mime types
import express = require("express");
// Built-in constructor function to set up new express app
const app = express();

const PORT = 3000;
const HOST = "localhost";

app.use(express.static(path.join(__dirname, "node_modules")));

// Routing
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// Start server and listen on specified port
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

/*
fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end("ERROR. Page Not Found.");
      return;
    }

    // Security features built into mime-types
    res.setHeader("X-Content-Type-Options", "nosniff");
    let mime = lookup(path);
    res.writeHead(200, { "Content-type": mime });
    res.end(data);
  });
  */
