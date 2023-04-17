var StartID = 500;
var CurrentID = 0

CurrentID = StartID;

function updateBoardId() {
  var updatedID = CurrentID
  return updatedID
}

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
      return [
        {
          icon: "https://i.ibb.co/6sbknH0/logo-stroke-32pt-style-2-no-stroke.png",
          text: 'Add Ticket ID',
          callback: function (t) {
            CurrentID++;
            return t.card().then((card) => alert(CurrentID))
          }
        },
        {
          icon: "https://i.ibb.co/6sbknH0/logo-stroke-32pt-style-2-no-stroke.png",
          text: 'Check Ticket ID',
          callback: function(t){
            return t.card().then((card) => alert(CurrentID))
          }
        }
      ];
    },
    "card-detail-badges": function (t, opts) {
      return t.card("name").get("name").then(function (cardName) {
         alert("Your ticket has an ID of " + CurrentID);
          return [
            {
              dynamic: function () {
                return {
                  title: "Detail Badge",
                  text: "Dynamic " + (Math.random() * 100).toFixed(0).toString(),
                  color: randomBadgeColor(),
                  refresh: 10, // in seconds
                };
              },
            },
          ];
      });
    },
    'board-buttons': function(t, options){
      return [
        {
        icon: 'https://i.ibb.co/6sbknH0/logo-stroke-32pt-style-2-no-stroke.png',
        text: 'Check laatse ticket ID', 

        callback: function(t){
          return alert('Laatse ticket is gemaakt met het ID: ' + CurrentID);
        }
      }];
    }
});