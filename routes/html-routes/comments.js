const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /commnets

router.get("/", (req, res) => {
  // get comments from db and send to template
  // db.LogIn.findAll({include: {all:true , nested:true}})
  //   .then(email => res.render("index", {email : email}))
  //   .catch(err => {
  //     res.status(500);
  //     next(err);
  //   });
});

module.exports = router;
