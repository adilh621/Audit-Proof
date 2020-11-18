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
//   router.get("/login", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  router.get("/index", isAuthenticated, (req, res) => {
    res.render(path.join(__dirname, "../../views/index.handlebars"));
  });

  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
// // when user hits /sign-in route , sign in page is rendered
//   router.get('/sign-in', (req, res) => {

//     res.render(path.join(__dirname, "../../views/sign-in.handlebars"));

// })

// router.get('/sign-up', (req, res) => {

//     res.render(path.join(__dirname, "../../views/sign-up.handlebars"));
// })


// router.get('/index', (req, res) => {

//     res.render(path.join(__dirname, "../../views/index.handlebars"));
// })
// router.get('/sign-in', (req, res) => {
//     let page = '404';
//     let params = {
//         user: false,
//         title: '404'
//     }
//     res.render(page, params)
// })
// router.get('/invoice', (req, res) => {
//     let page = 'invoice';
//     let params = {
//         user: true,
//         title: 'Invoice'
//     }
//     res.render(page, params)
// })
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
