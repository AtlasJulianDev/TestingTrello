function setNewCardId(notification)
{
  new Notification(notification)
  .createdCard()
  .setCustomFieldValue("Unique ID",latestCardId());
}

function latestCardId()
{
  var card = Card.findOrCreate(Board.findOrCreate("System Configuration").findOrCreateList("Card ID"),"Latest Card Count");
  var latest_count = card.customFieldValue("Latest ID");
  
  if(!latest_count)
    latest_count = 2000;
  else
    latest_count = parseInt(latest_count)+1;

  Logger.log(latest_count);
  card.setCustomFieldValue("Latest ID",latest_count);
  return padLeft(latest_count,5);
}

function padLeft(nr, n, str)
{
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}