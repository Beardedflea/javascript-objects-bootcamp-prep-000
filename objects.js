var playlist = new Object();

playlist['Slowdive'] = 'Alison';
playlist['My Bloody Valentine'] = 'Sometimes';



function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = 'songTitle';
  return playlist;
}

updatePlaylist(playlist,'My Bloody Valentine', 'Sometimes');
updatePlaylist(playlist,'Slowdive', 'Alison');