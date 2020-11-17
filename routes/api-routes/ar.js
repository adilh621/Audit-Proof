var db = require("../models");

module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/Ar/", function(req, res) {
        db.Ar.findAll({})
            .then(function(dbAr) {
                res.json(dbAr);
        });
    });

// Luis how to filter on a specific date
    app.get("/api/Ar/daysOustanding/:category", function(req, res) {
        db.Ar.findAll({
            where: {
            createdAt: {$lt: req.params.now
            }
            }
        })
        .then(function(dbAr) {
            res.json(dbAr);
        });
    });

    app.post("/api/Ar", function(req, res) {
        console.log(req.body);
        db.Ar.create({
            date: req.body.date,
            amountOwed: req.body.amountOwed

        })
        .then(function(dbAr) {
            res.json(dbAr);
        });
    });

    app.delete("/api/Ar/:id", function(req, res) {
        db.Ar.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbAr) {
            res.json(dbAr);
        });
    });

    app.put("/api/Ar", function(req, res) {
        db.Ar.update(req.body,
        {
            where: {
            id: req.body.id
            }
        })
        .then(function(dbAr) {
            res.json(dbAr);
        });
    });

    

}