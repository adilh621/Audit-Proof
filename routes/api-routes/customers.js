/* eslint-disable no-trailing-spaces */
// const express = require("express");
// const router = express.Router();
// const db = require("../../models");


module.exports = function(app) {

app.get("/api/Customer/", function(req, res) {
  db.Customer.findAll({})
    .then(function(dbCustomer) {
      res.render("customer", {
        name : name
      });
    });
});

// Ask luis how to filter so it is just paid or outstadning
// app.get("/api/posts/", function(req, res) {
//   db.Invoice.findAll({
//     where: {
//       status: req.params.status
//     }
//   })
//     .then(function(dbInvoice) {
//       res.json(dbInvoice);
//     });
// });
// hit the route of the customer id
app.post("/api/Customer", function(req, res) {
  console.log(req.body);
  db.Customer.create({
    // name sitora has to id this shit properly based on type
    name: req.body.name
  })
    .then(function(dbCustomer) {
      res.json(dbCustomer);
    });
});

app.delete("/api/Customer/:id", function(req, res) {
  db.Customer.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbCustomer) {
      res.json(dbCustomer);
    });
});

app.put("/api/Customer/:id", function(req, res) {
  db.Customer.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbCustomer) {
      res.json(dbCustomer);
    });
});

}