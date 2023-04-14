var StartID = 500;
var CurrentID = 0

CurrentID = StartID;

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
});