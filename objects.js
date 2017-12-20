
var playlist = {[artistName]: songTitle};

const artistName = 'Phil Ochs'
function updatePlaylist(playlist, artistName, songTitle) {
  var artistName = 'Phil Ochs'
  var songTitle = "Here's to the State of Mississippi"
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
updatePlaylist()

function removeFromPlaylist(playlist, artistName) {
  var playlist = {'Kanye': "Gold Digger"}
  var artistName = 'Kanye'
  delete playlist.artistName
  return playlist
}
removeFromPlaylist()
