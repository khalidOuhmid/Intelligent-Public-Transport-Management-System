const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
    res.send({ message: "Backend is running!" });
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
