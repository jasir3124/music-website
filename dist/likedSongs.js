let savedSongs = JSON.parse(localStorage.getItem("songs"));
console.log(savedSongs);
savedSongs.forEach((song) => {
  createSongCard(
    song.name,
    song.creator,
    song.albumName,
    song.albumCover,
    song.timeLength,
    song.inedex = savedSongs.indexOf(song) + 1
  );
});

function createSongCard(name, creator, albumName1, albumCover, time, index) {
  // this contains everything
  let songsCont = document.querySelector(".songs");

  // this is the card thats appended to the songsCont
  let songCard = document.createElement("div");
  songCard.classList.add(
    "song",
    "grid",
    "w-full",
    "items-center",
    "hover:bg-zinc-800",
    "p-3",
    "rounded-md"
  );

  // this is the left side that contains songNumberCont, albumCoverPhoto and albumCoverMoreInfo
  let songAlbumCoverCont = document.createElement("div");
  songAlbumCoverCont.classList.add(
    "whitespace-nowrap",
    "flex",
    "items-center",
    "gap-5"
  );

  // this conaitns the song number thats on the left side of the album photo and it is appended to the songAlbumCoverCont
  let songNumberCont = document.createElement("div");
  songNumberCont.classList.add("songNumbercont");

  let songNumber = document.createElement("p");
  songNumber.classList.add("text-xl", "text-gray-400", "songNumber");
  songNumber.innerHTML = index;

  // this is the play button that shows when you hover over the song it is appended to the songNumberCont
  let playIcon = document.createElement("i");
  playIcon.classList.add("fa-solid", "fa-play", "songPlayBtn");
  playIcon.style.color = "white";
  if (index > 9) {
    playIcon.style.marginRight = "11px";
  }

  // this is appended to the songAlbumCoverCont
  let albumCoverPhoto = document.createElement("img");
  albumCoverPhoto.src = albumCover;
  albumCoverPhoto.alt = "albumCoverPhoto";
  albumCoverPhoto.style.height = "65px";
  albumCoverPhoto.style.width = "65px";
  if (index > 9) {
    albumCoverPhoto.style.marginLeft = "-10px";
  }

  // this is appended to the songAlbumCoverCont
  let albumCoverMoreInfo = document.createElement("div");

  // this is appended to the albumCoverMoreInfo
  let songName = document.createElement("p");
  songName.classList.add("font-semibold");
  songName.innerHTML = name;

  // this is appended to the albumCoverMoreInfo
  let creatorName = document.createElement("p");
  creatorName.classList.add("text-gray-400");
  creatorName.innerHTML = creator;

  // this is appende to the songCard
  let albumName = document.createElement("p");
  albumName.classList.add("justify-self-center", "ps-4");
  albumName.innerHTML = albumName1;

  // this is appende to the songCard
  let timeAndSaveIconCont = document.createElement("div");
  timeAndSaveIconCont.classList.add("justify-self-end", "flex");
  // this is appende to the timeAndSaveIconCont
  let saveIcon = document.createElement("i");
  saveIcon.classList.add(
    "fa-regular",
    "fa-heart",
    "pt-1.5",
    "pe-10",
    "saveIcon"
  );
  // this is appende to the timeAndSaveIconCont
  let timeLength = document.createElement("p");
  timeLength.innerHTML = time;

  timeAndSaveIconCont.appendChild(saveIcon);
  timeAndSaveIconCont.appendChild(timeLength);
  albumCoverMoreInfo.appendChild(songName),
    albumCoverMoreInfo.appendChild(creatorName),
    songNumberCont.appendChild(songNumber);
  songNumberCont.appendChild(playIcon);
  songAlbumCoverCont.appendChild(songNumberCont);
  songAlbumCoverCont.appendChild(albumCoverPhoto);
  songAlbumCoverCont.appendChild(albumCoverMoreInfo);
  songCard.appendChild(songAlbumCoverCont);
  songCard.appendChild(albumName);
  songCard.appendChild(timeAndSaveIconCont);
  songsCont.appendChild(songCard);
}