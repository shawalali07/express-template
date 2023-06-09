const express = require("express");
const { createBootcamp } = require("../controllers/bootcamps");

const router = express.Router();

const { protect, authorize } = require("../middleware/auth");

router.route("/").post(protect, createBootcamp);

module.exports = router;
