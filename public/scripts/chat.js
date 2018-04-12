const colors = [
  '#FF0000',
  '#00b727',
  '#0000FF',
  '#008c96',
  '#9f00b7',
  '#b70055',
  '#b7b300',
  '#d67500',
  '#000000'
];

var socket = io();

function scrollToBottom () {
  // Selectors
  var messages = jQuery('#messages');
  var newMessage = messages.children('li:last-child');
  // Heights
  var clientHeight = messages.prop('clientHeight');
  var scrollTop = messages.prop('scrollTop');
  var scrollHeight = messages.prop('scrollHeight');
  var newMessageHeight = newMessage.innerHeight();
  var lastMessageHeight = newMessage.prev().innerHeight();

  if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
    messages.scrollTop(scrollHeight);
  }
}

socket.on('connect', function () {
  var params = jQuery.deparam(window.location.search);

  socket.emit('join', params, function (err) {
    console.log(params);
    if (err) {
      alert(err);
      window.location.href = '/';
    } else {
      // console.log('No error');
    }
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('sendMessage', function (message) {
  var formattedTime = moment(message.timestamp).format('h:mm a');
  var template = jQuery('#message-template').html();
  var html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    color: colors[message.color],
    timestamp: formattedTime
  });

  jQuery('#messages').append(html);
  scrollToBottom();
});

socket.on('updateUserList', function (users) {
  var ol = jQuery('<ol></ol>');

  users.forEach(function (user) {
    console.log(user);
    ol.append(jQuery('<li></li>').css('color', colors[user.color]).text(user.name));
  });

  jQuery('#users').html(ol);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');

  socket.emit('getMessage', {
    from: 'User',
    text: messageTextbox.val()
  }, function () {
    messageTextbox.val('');
  });
});
