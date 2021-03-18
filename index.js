// Import pre-bundled node modules
const fs = require("fs");
const url = require("url");
const http = require("http");
// Import 3rd party mime types
const mimeTypes = require("mime-types");

let lookup = mimeTypes.lookup;

const PORT = 3000;
const HOST = "localhost";

let server = http.createServer((req, res) => {
  let parsedURL = new URL(req.url, "http://" + HOST + ":" + PORT);
  let path = parsedURL.pathname.replace(/^\/+|\/+$/g, "");

  switch (path) {
    case "":
    case "":
    case "home":
      path = "index.html";
      break;
    case "about":
      path = "index.html";
      break;
    case "services":
      path = "index.html";
      break;
    case "services":
      path = "index.html";
      break;
    case "contact":
      path = "index.html";
      break;
    case "contact-list":
      path = "index.html";
      break;
    case "projects":
      path = "index.html";
      break;
    case "register":
      path = "index.html";
      break;
    case "login":
      path = "index.html";
      break;
    case "edit":
      path = "index.html";
      break;
    default:
      path = "404.html";
      break;
  }

  let file = __dirname + "/" + path;

  console.log(file);

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
});

server.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);
