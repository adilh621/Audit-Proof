var db = require("../models");

module.exports = function(app) {
    app.get("/api/Cash/", function(req, res) {
        db.Cash.findAll({})
            .then(function(dbCash) {
                res.json(dbCash);
        });
    });

    app.get("/api/Ar/:id", function(req, res) {
        db.Ar.findOne({
            where: {
            id: req.params.id
            }
        })
        .then(function(dbCash) {
            res.json(dbCash);
        });
    });

    // app.post("/api/Cash", function(req, res) {
    //     console.log(req.body);
    //     db.Cash.create({
    //         date: req.body.date,
    //         amountOwed: req.body.amountOwed

    //     })
    //     .then(function(dbCustomer) {
    //         res.json(dbCustomer);
    //     });
    // });

    app.delete("/api/Cash/:id", function(req, res) {
        db.Cash.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbCash) {
            res.json(dbCash);
        });
    });

    app.put("/api/Cash", function(req, res) {
        db.Cash.update(req.body,
        {
            where: {
            id: req.body.id
            }
        })
        .then(function(dbCash) {
            res.json(dbCash);
        });
    });


}