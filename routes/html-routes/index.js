const express = require('express');
const router = express.Router();
const path = require("path");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

const db = require("../../models");


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
    db.Customer.findAll({})
      .then((dbCustomer)=>{

        res.render(path.join(__dirname, "../../views/index.handlebars"), {name: dbCustomer })
        
    
      })
    
    
  });

  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });



  router.get("/ar", (req, res) => {
    
    res.render(path.join(__dirname, "../../views/ar.handlebars"))
    
  });

  router.get("/cash", (req, res) => {
    
    res.render(path.join(__dirname, "../../views/cash.handlebars"))
    
  });




  router.get("/customer", (req, res) => {
    db.Customer.findAll({})
      .then((dbCustomer)=>{

        res.render(path.join(__dirname, "../../views/customer.handlebars"), {name : dbCustomer })
        
    
      })

  });

  router.get("/invoice", (req, res) => {
    console.log("invoice page load")
    db.Invoice.findAll({})
      .then((dbInvoice)=>{
        console.log(dbInvoice)
        res.render(path.join(__dirname, "../../views/invoice.handlebars"), {id : dbInvoice})
        
    
      })
      .catch((err) => {console.log(err.message)})

  });


module.exports = router;

