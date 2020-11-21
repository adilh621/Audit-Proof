const express = require("express");
const commentsRoute = require("./comments");
const router = express.Router();
router.get('/',
    (req, res) => {
        let user = true
        let page = 'index'
        let params = {
            user: user,
            title: 'Home',
            style: page,
            js: page
        }
        res.render(page, params)
    }
);

router.use("/comments", commentsRoute);

module.exports = router;
