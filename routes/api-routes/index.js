const express = require("express");
const passport = require("../../config/passport");
// const commentsRoute = require("./comments");
const router = express.Router();

// router.use("/comments", commentsRoute);
router.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

module.exports = router;
