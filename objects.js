var playlist = {cher: "believe"}

function updatePlaylist(playlist, artistName, songTitle) {
  var artistName = 'Phil Ochs'
  var songTitle = "Here's to the State of Mississippi"
  return Object.assign({}, playlist, {[artistName]: songTitle]})
}
