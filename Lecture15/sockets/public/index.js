$(document).ready(() => {
  let socket = io('ws://localhost:3000/chat');
let scoketchat = io('/chat')
  let loginDiv = $('#login-div')
  let chatDiv = $('#chat-div')
  let usernameInput = $('#username-box')
  let message = $('#message-box')
  let sendBtn = $('#send-btn')
  let loginBtn = $('#username-btn')
  let list = $('#list')


  chatDiv.hide();

  loginBtn.click(() => {
    let username = usernameInput.val()
    socket.emit('login', {username: username})
    chatDiv.show();
    loginDiv.hide();
  })

  sendBtn.click(() => {
    let msg = message.val()
    console.log(message)
    console.log("helloo")
    socket.emit('send-msg', {message: msg})
  })

  socket.on('new-msg', (data) => {
    console.log("hey")
    list.append(`<li> ${data.message}</li>`)
  })




})



