const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})