let savedSongs = [];
let songsError = document.querySelector(".songsErrorText");
let songsStorage = JSON.parse(localStorage.getItem("songs"));

if (songsStorage !== null && songsStorage.length > 0) {
  savedSongs.push(...songsStorage);
  songsError.style.display = "none";
} else {
  songsError.style.display = "block";
}

savedSongs.forEach((song) => {
  createSongCard(
    song.name,
    song.creator,
    song.albumName,
    song.albumCover,
    song.timeLength,
    (song.inedex = savedSongs.indexOf(song) + 1)
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
    "saveIcon",
    "saveIconActive",
    "fa-solid"
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

let songCard = document.querySelectorAll(".song");
songCard.forEach((song) => {
  // let songNumberCont = song.querySelector(".songNumbercont");

  let songNum = song.querySelector(".songNumber");

  let playIcon = song.querySelector(".songPlayBtn");

  let saveIcon = song.querySelector(".saveIcon");

  song.addEventListener("mouseover", function () {
    songNum.style.display = "none";
    playIcon.style.display = "block";
    saveIcon.style.display = "block";
  });

  song.addEventListener("mouseout", function () {
    songNum.style.display = "block";
    playIcon.style.display = "none";
    if (saveIcon.classList.contains("saveIconActive")) {
      return;
    } else {
      saveIcon.style.display = "none";
    }
  });
});

let savedSongsArrays = [];
console.log(savedSongsArrays);

let storage = JSON.parse(localStorage.getItem("songs"));
if (storage) {
  savedSongsArrays.push(...storage);
}
let saveIcon = document.querySelectorAll(".saveIcon");
let testObj = {
  name: "",
  creator: "",
  albumName: "",
  albumCover: "",
  timeLength: "",
};

// change saveIcon to active and save song
saveIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (!icon.classList.contains("saveIconActive")) {
      console.log("true");
      icon.classList.toggle("saveIconActive");
      icon.classList.toggle("fa-solid");
      let song = icon.parentElement.parentElement;
      let songAuthor = song.firstChild.lastChild.lastChild.textContent;
      let songTitle = song.firstChild.lastChild.firstChild.textContent;
      let songAlbumTitle = song.children[1].textContent;
      let songImg = song.firstChild.children[1].getAttribute("src");
      let songTimeLength = song.lastChild.lastChild.textContent;
      testObj.name = songTitle;
      testObj.creator = songAuthor;
      testObj.albumName = songAlbumTitle;
      testObj.albumCover = songImg;
      testObj.timeLength = songTimeLength;
      savedSongsArrays.push(Object.assign({}, testObj));
      localStorage.setItem("songs", JSON.stringify(savedSongsArrays));
      console.log(savedSongsArrays);
    } else {
      icon.classList.remove("saveIconActive", "fa-solid");
      let song = icon.parentElement.parentElement;
      let songName = song.firstChild.lastChild.firstChild.textContent;
      for (let i = 0; i < savedSongsArrays.length; i++) {
        if (savedSongsArrays[i].name === songName) {
          savedSongsArrays.splice(i, 1);
          savedSongsArrays.push();
          localStorage.setItem("songs", JSON.stringify(savedSongsArrays));
        }
      }
    }
  });
});

// localStorage.clear()
