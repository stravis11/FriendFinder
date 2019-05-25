const friends = require("../data/friends");

module.exports = app => {
  // GET all friends
  app.get("/api/friends", (req, res) => {
    return res.json(friends);
  });

  // POST new friend
  app.post("/api/friends", (req, res) => {
    // record the user input
    var userInput = req.body;

    // record response
    var userResponses = userInput.scores;

    // Compute
    var matchName = "";
    var matchImage = "";
    var totalDifference = 5000;

    // loop all friends

    for (var i = 0; i < friends.length; i++) {
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userInput[j]);
      }

      // Record the friend match if lowest difference

      if (diff < totalDifference) {
        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }

    // Add new friends
    friends.push(userInput);

    // Send response
    res.json({ status: "OK", matchName: matchName, matchImage: matchImage });
  });
};
