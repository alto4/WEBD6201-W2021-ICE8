"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
const HOST = "localhost";
app.use(express.static(path.join(__dirname, "node_modules")));
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
//# sourceMappingURL=index.js.map