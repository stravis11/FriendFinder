var friendData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    db.query("SELECT * FROM friendfinder", (err, data) => {
      res.send(data);
    });

    app.post("/api/friends", (req, res) => {
      db.query(
        "INSERT INTO friendfinder SET name=?, photo=?, scores=?",
        [req.body.name, req.body.photo, req.body.scores],
        (err, result) => {
          if (err) throw err;
          res.send({ success: "true!" });
        }
      );
    });
  });
};
