// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  // render: _.template(`
  //     <div class="chat">
  //       <div class="username"><%-username %></div>
  //       <div><%-message %></div>
  //     </div>
  //   `, {
  //     evaluate:/\{\{(.+?)\}\}/g,
  //     interpolate:/\{\{=(.+?)\}\}/g
  //     // escape:/\{\{-(.+?)\}\}/g
  //   })

  render: _.template(`
    <div class="chat">
<<<<<<< HEAD
      <div class="username" value="<%-username %>"><%-username %></div>
      <div class="message"><%-message %></div>
      <div><%-roomname %></div>
=======
      <div class="username"><%=username %></div>
      <div><%-message %></div>
>>>>>>> 13bbb7eadef504c7db16c012f26243eaddeef6cf
    </div>
  `)
};