// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    console.log(Messages);
    for(var message of Messages._data) {
      this.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // _.templateSettings = {
    //   evaluate:/\{\{(.+?)\}\}/g,
    //   interpolate:/\{\{=(.+?)\}\}/g,
    //   escape:/\{\{-(.+?)\}\}/g
    // }

    $('#chats').append(MessageView.render({username: message.username + ':', message: message.text}));

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }
}
// var template = _.template("<b><%- value %></b>");
// template({value: '<script>'});
// => "<b>&lt;script&gt;</b>"
// };