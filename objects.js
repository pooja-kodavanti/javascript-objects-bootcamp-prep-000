
var playlist = {'cher': "believe"};

const artistName = 'Phil Ochs'
function updatePlaylist(playlist, artistName, songTitle) {
  var playlist = {[artistName]: songTitle};
  var artistName = 'Phil Ochs'
  var songTitle = "Here's to the State of Mississippi"
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
updatePlaylist()

const playlist = {'Kanye': "Gold Digger"}
function removeFromPlaylist(playlist, artistName) {
  var playlist = {'Kanye': "Gold Digger"}
  var artistName = 'Kanye'
  delete playlist.artistName
  return playlist
}
removeFromPlaylist()
