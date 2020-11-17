const express = require('express');
const router = express.Router();
const path = require("path");


// first page user is brought too
router.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/sign-up");
    }
    res.render(path.join(__dirname, "../../views/sign-in.handlebars"));
  });

// when user hits /sign-in route , sign in page is rendered
  router.get('/sign-in', (req, res) => {

    res.render(path.join(__dirname, "../../views/sign-in.handlebars"));

})

router.get('/sign-up', (req, res) => {

    res.render(path.join(__dirname, "../../views/sign-up.handlebars"));
})


router.get('/index', (req, res) => {

    res.render(path.join(__dirname, "../../views/index.handlebars"));
})
router.get('/sign-in', (req, res) => {
    let page = '404';
    let params = {
        user: false,
        title: '404'
    }
    res.render(page, params)
})
router.get('/invoice', (req, res) => {
    let page = 'invoice';
    let params = {
        user: true,
        title: 'Invoice'
    }
    res.render(page, params)
})
// router.get('/',
//     (req, res) => {
//         let user = true
//         let page = 'index'
//         let params = {
//             user: user,
//             title: 'Home',
//             style: page,
//             js: page
//         }
//         res.render("main")
//     }
// );



module.exports = router;
