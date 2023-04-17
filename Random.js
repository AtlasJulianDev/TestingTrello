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
      return t
        .card("name")
        .get("name")
        .then(function (cardName) {
          console.log("We just loaded the card name for fun: " + cardName);
  
          return [
            {
                title: "Popup Detail Badge",
                text: "Popup",
                callback: function (t, opts) {
                  // function to run on click
                  // do something
                  return alert("Do something")
                },
            },
            {
              // its best to use static badges unless you need your badges
              // to refresh you can mix and match between static and dynamic
              title: "Detail Badge",
              text: "Static",
              color: null,
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