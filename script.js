function onSuccess(numUnread) {
  var div = document.getElementById('output');
  div.innerHTML = 'You have ' + numUnread
      + ' unread messages in your Gmail inbox.';
}

google.script.run.withSuccessHandler(onSuccess)
    .getUnreadEmails();