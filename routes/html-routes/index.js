const express = require('express');
const router = express.Router();
const path = require("path");
const isAuthenticated = require("../../config/middleware/isAuthenticated");


// first page user is brought too
router.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/sign-up");
    }
    res.render(path.join(__dirname, "../../views/sign-in.handlebars"));
  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  router.get("/index", isAuthenticated, (req, res) => {
    res.render(path.join(__dirname, "../../views/index.handlebars"));
  });

  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  router.get("/invoice", (req, res) => {
    
    res.render(path.join(__dirname, "../../views/invoice.handlebars"))
    
  });

  router.get("/ar", (req, res) => {
    
    res.render(path.join(__dirname, "../../views/ar.handlebars"))
    
  });

  router.get("/cash", (req, res) => {
    
    res.render(path.join(__dirname, "../../views/cash.handlebars"))
    
  });
  router.get("/customer", (req, res) => {
    
    res.render(path.join(__dirname, "../../views/customer.handlebars"), {data: req.results})
    console.log(req)
  });

module.exports = router;
