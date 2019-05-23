require("dotenv").config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

// const {
//   env: { DB_HOST, DB_USER, DB_PASSWORD }
// } = process;

// // create the connection information for the sql database
// const db = mysql.createConnection({
//   // hostname, stored in .env
//   host: DB_HOST,

//   // Your port; if not 3306
//   port: 3306,

//   // Your username, stored in .env
//   user: DB_USER,

//   // Your password, stored in .env
//   password: DB_PASSWORD,
//   database: "friendfinder"
// });

const app = express();

// Tells Express to give the browser access to anything inside public
app.use(express.static(path.join(__dirname, "public")));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// db.connect(err => {
//   if (err) throw err;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
// });
