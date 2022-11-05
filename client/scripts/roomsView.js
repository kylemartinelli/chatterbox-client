// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    for(var roomkey in Rooms._data) {
      this.renderRoom(roomkey);
    }
    RoomsView.$select.value = Rooms.currentRoom;
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append(this.html({ roomname: roomname }));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // console.log(event.currentTarget.value);
    Rooms.selectRoom(event.currentTarget.value);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let newRoom = window.prompt("Enter a new room name");
    Rooms.add(newRoom);
    RoomsView.render();
  },

  html: _.template(`
    <option value="<%-roomname %>"><%-roomname %></option>
  `)

};
