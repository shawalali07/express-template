const asyncHandler = require("../middleware/asyncHandler");

module.exports.createBootcamp = asyncHandler(async (req, res, next) => {
  console.log(req.user);
});
