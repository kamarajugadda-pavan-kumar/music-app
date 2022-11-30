const checkSongExistsInList = (songsList, songId) => {
  for (let i = 0; i < songsList.length; i++) {
    if (songsList[i].key === songId) {
      return true;
    }
  }
  return false;
};

export default checkSongExistsInList;
