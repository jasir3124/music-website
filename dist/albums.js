import album6AM from "../components/6amAlbumSongs.js";
import albumGraduation from "../components/graduationAlbumSongs.js";
import albumAwakenMyLove from "../components/awakenMyLoveAlbumSongs.js";
import albumBlonde from "../components/blondeAlbumSongs.js"
import albumGkmc from "../components/gkmcAlbumSongs.js"

const currentUrl = document.URL;
console.log(currentUrl);
let albumSongs;

let searchPath6AM = "dist/6amAlbum.html";
let searchPathGraduation = "dist/graduationAlbum.html";
let searchPathAwakenMyLove = "dist/awekenMyLoveAlbum.html"
let searshPathBlonde = "dist/blondeAlbum.html";
let searchPathGkmc = "dist/gkmcAlbum.html"

if (currentUrl.indexOf(searchPath6AM) !== -1) {
  albumSongs = album6AM
} else if (currentUrl.indexOf(searchPathGraduation) !== -1) {
  albumSongs = albumGraduation  
} else if (currentUrl.indexOf(searchPathAwakenMyLove) !== -1) {
  albumSongs = albumAwakenMyLove
} else if (currentUrl.indexOf(searshPathBlonde) !== -1){
  albumSongs = albumBlonde
} else if (currentUrl.indexOf(searchPathGkmc) !== -1){
  albumSongs = albumGkmc
}

albumSongs.forEach((song) => {
  createSongCard(
    song.name,
    song.creator,
    song.albumCover,
    song.timeLength,
    song.plays,
    (song.index = albumSongs.indexOf(song) + 1),
    song.link
  );
});

function createSongCard(name, creator, albumCover, time, plays, index, link) {
  // this contains everything
  let songsCont = document.querySelector(".songs");

  let songLink = document.createElement("a");
  songLink.href = link
  songLink.setAttribute('target', '_blank');
  
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
  albumCoverPhoto.style.display = "none";

  // this is appended to the songAlbumCoverCont
  let albumCoverMoreInfo = document.createElement("div");
  if (index > 9) {
    albumCoverMoreInfo.style.marginLeft = "-11px";
  }

  // this is appended to the albumCoverMoreInfo
  let songName = document.createElement("p");
  songName.classList.add("font-semibold");
  songName.innerHTML = name;

  // this is appended to the albumCoverMoreInfo
  let creatorName = document.createElement("p");
  creatorName.classList.add("text-gray-400");
  creatorName.innerHTML = creator;

  // this is appende to the songCard
  let songPlays = document.createElement("p");
  songPlays.classList.add("justify-self-center", "ps-4");
  songPlays.innerHTML = plays;

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
  songCard.appendChild(songPlays);
  songCard.appendChild(timeAndSaveIconCont);
  songLink.appendChild(songCard);
  songsCont.appendChild(songLink);
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

window.addEventListener("load", function () {
  let storage = JSON.parse(localStorage.getItem("songs"));
  let songsArray = [];
  if (storage) {
    songsArray.push(...storage);
    console.log(songsArray);
  }

  let saveIcon = document.querySelectorAll(".saveIcon");
  saveIcon.forEach((icon) => {
    let song = icon.parentElement.parentElement;
    let songTitle = song.firstChild.lastChild.firstChild.textContent;
    for (let i = 0; i < songsArray.length; i++) {
      if (songTitle === songsArray[i].name) {
        icon.classList.add("saveIconActive", "fa-solid");
        icon.style.display = "block";
      }
    }
  });
});

// localStorage.clear();
