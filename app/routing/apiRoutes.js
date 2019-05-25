// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a survey and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // console.log(friendsData[0].scores);
    // console.log(req.body.scores);
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

        //set lowest diff if there is not one
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
