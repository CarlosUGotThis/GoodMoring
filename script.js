function createShareableLink() {
  var message = document.getElementById('message').value;
  var encodedMessage = encodeURIComponent(message);
  var baseURL = 'https://example.com/';
  var uniqueID = generateUniqueID();
  var shareableLink = baseURL + uniqueID + '?message=' + encodedMessage;
  
  document.getElementById('shareableLink').innerHTML = 'Shareable Link: <a href="' + shareableLink + '">' + shareableLink + '</a>';
}

function generateUniqueID() {
  // This is a simple example, you may need to use a more robust method to generate unique IDs in production.
  var timestamp = Date.now().toString();
  var random = Math.random().toString().substring(2);
  return timestamp + random;
}
