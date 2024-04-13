const express = require("express")
const {GenerateShortURL} = require("../Controllers/url")

const router = express.Router();

router.post("/" , GenerateShortURL)

module.exports = router ;