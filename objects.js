var playlist = {};

function updatePlaylist(playlist, artistName, songTitle) {
  var artistName = 'Phil Ochs'
  var songTitle = "Here's to the State of Mississippi"
  return Object.assign({}, playlist, {[artistName]: songTitle]})
}

function removeFromPlaylist(playlist, artistName) {
  var artistName = ''
}
