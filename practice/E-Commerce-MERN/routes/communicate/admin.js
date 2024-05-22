const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    res.render("src/index", { layout: "" })
}))

module.exports = router