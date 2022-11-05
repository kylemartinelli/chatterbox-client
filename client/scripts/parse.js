// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.
//

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`, // campus is 'RFP'??

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message

    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify({ username: message.username, text: message.text, roomname: message.roomname}),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to post messages', error);
      }
    });

    // $.ajax({
    //   url: Parse.server,
    //   type: 'POST',
    //   data: '{"username":"<script>alert("hack test")</script>","text":"hack test","roomname":"Breakout Room 12"}',
    //   contentType: 'application/json',
    //   success: successCB,
    //   error: errorCB || function(error) {
    //     console.error('chatterbox: Failed to post messages', error);
    //   }
    // });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server, // The Parse API or other website to which we want to send a request
      type: 'GET', // HTTp verb - tells the server whata ction to take
      data: { order: '-createdAt' }, // data sent to the server, which specifies extra options for how the "get" should happen
      contentType: 'application/json', // MIME-type format of the content you are providing to the server
      success: successCB, //ASYNC non-blocking
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};


