var CurrentID = 0
var StartID = 500;

function addID() {
    var newID = CurrentID++;
    CurrentID = newID
    return CurrentID
}

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
      return [
        {
          icon: "https://i.ibb.co/6sbknH0/logo-stroke-32pt-style-2-no-stroke.png",
          text: 'Hello World!',
          callback: function (t) {
            CurrentID = StartID;
            return t.card().then((card) => alert(CurrentID))
          }
        }
      ];
    },
});