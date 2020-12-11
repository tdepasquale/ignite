export const getResizedImage = (imagePath, size) => {
  //resizes images from media/screenshots and media/games
  const image = imagePath?.match(/media\/screenshots/)
    ? imagePath?.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath?.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};
