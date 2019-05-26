const friendsData = require("../data/friends");

module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
    if (friendsData.length > 0) {
      var indexOfClosestMatch = 0;
      var lowestDif;
      for (i = 0; i < friendsData.length; i++) {
        var totalDif = 0;
        for (x = 0; x < friendsData[i].scores.length; x++) {
          totalDif += Math.abs(
            parseInt(friendsData[i].scores[x]) - parseInt(req.body.scores[x])
          );
        }

        // Set lowest diff if there is not one
        if (lowestDif == undefined) {
          lowestDif = totalDif;
          indexOfClosestMatch = i;
        }
        if (lowestDif > totalDif) {
          lowestDif = totalDif;
          indexOfClosestMatch = i;
        }
      }
    }

    friendsData.push(req.body);

    res.json(friendsData[indexOfClosestMatch]);
  });
};
