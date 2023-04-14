var CurrentID = 0
var OldID = CurrentID

function handleID(newId) {
    var newerId = newId
    OldID = newerId++;
}

window.TrelloPowerUp.initialize({
    // Start adding handlers for your capabilities here!
    'card-buttons': function (t, options) {
      return [
        {
          icon: "https://i.ibb.co/6sbknH0/logo-stroke-32pt-style-2-no-stroke.png",
          text: 'Hello World!',
          callback: function (t) {
            return t.card().then((card) => alert(handleID(CurrentID)))
          }
        }
      ];
    },
});