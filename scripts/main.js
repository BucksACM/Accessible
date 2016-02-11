var fbRooms, fbItems;
$(function() {
  // Annonymous Document.ready() callback
  console.log("I'm Ready!");
  // Create Firebase Object
  fbRooms = new Firebase("https://accessible.firebaseio.com/rooms/");
  fbItems = new Firebase("https://accessible.firebaseio.com/items/");

});


// Objects to Sync With Firebase
var Room = {
  number: 0,
  buildingName: String,
  Items: {}
}

var Item = {
  isHome: false,
  beingReturned: false,
  homeRoom: {},
  lastReturnedBy: {}
}

var User = {
  userId: 0,
  currentlyReturning: {},
  itemsReturned: 0,
  classRooms:{}
}
