const express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const db = require("./models");
const seed = require("./utils/seed");
const seed1 = require("./utils/seed1");
const seed2 = require("./utils/seed2");
const seed3 = require("./utils/seed3");
const seed4 = require("./utils/seed4");
const errorHandler = require("./utils/errorHandler");
const passport = require("./config/passport");
const session = require("express-session")

const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
 );
 app.use(passport.initialize());
 app.use(passport.session());

 app.use

const exphbs = require("express-handlebars");

app.engine(
   "handlebars",
   exphbs({
      defaultLayout: "main",
      partialsDir: __dirname + "/views/"
   })
);
app.set("view engine", "handlebars");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// var routes = require("./controllers/burgersController.js");

app.use( apiRoutes);
app.use(htmlRoutes);


// error handling
app.use(errorHandler);

// drops all tables on eevery restart
db.sequelize.sync({ force: true }).then(async () => {
   // seed db
   await seed(db.LogIn);
   await seed1(db.Customer);
   await seed2(db.Invoice);
   await seed3(db.Ar);
   await seed4(db.Cash);

   app.listen(PORT, () => {
      console.log("🌎 => live on http://localhost:%s", PORT);
   });
});
