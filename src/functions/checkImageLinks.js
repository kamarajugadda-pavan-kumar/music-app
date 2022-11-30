const checkImageLinks = (songsList) => {
  return songsList.filter((song) => {
    return song.images && song.images.coverart;
  });
};

export default checkImageLinks;
