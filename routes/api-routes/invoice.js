var db = require("../models");

module.exports = function(app) {
    app.get("/api/Invoice/", function(req, res) {
        db.Invoice.findAll({})
            .then(function(dbInvoice) {
                res.json(dbInvoice);
        });
    });

    app.get("/api/Invoice/:id", function(req, res) {
        db.Invoice.findOne({
            where: {
            id: req.params.id
            }
        })
        .then(function(dbInvoice) {
            res.json(dbInvoice);
        });
    });

    app.post("/api/Invoice", function(req, res) {
        console.log(req.body);
        db.Invoice.create({
            date: req.body.date,
            amountOwed: req.body.amountOwed

        })
        .then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });

    app.delete("/api/Invoice/:id", function(req, res) {
        db.Invoice.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbInvoice) {
            res.json(dbInvoice);
        });
    });

    app.put("/api/Invoice", function(req, res) {
        db.Invoice.update(req.body,
        {
            where: {
            id: req.body.id
            }
        })
        .then(function(dbInvoice) {
            res.json(dbInvoice);
        });
    });

}