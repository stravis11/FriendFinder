const express = require("express");
const PORT = process.env.PORT || 8080;
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

const app = express();

// Tells Express to give the browser access to anything inside public
app.use(express.static("app/public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
