let welcomeText = document.querySelector(".helloText");

let hour = new Date().getHours();
if (hour >= 0 && hour < 12) {
  welcomeText.innerHTML = "Good Morning";
} else if (hour >= 12 && hour < 20) {
  welcomeText.innerHTML = "Good Afternoon";
} else {
  welcomeText.innerHTML = "Good Evening";
}

let collectionCardsInfo = [
  {
    image: "../images/liked Icon image.png",
    text: "Liked Songs",
    href: "#",
  },
  {
    image: "../images/6AM album cover.png",
    text: "6AM",
    href: "#",
  },
  {
    image: "../images/aweken my love album cover.png",
    text: '"Awaken, My Love"',
    href: "#",
  },
  {
    image: "../images/blond album cover.png",
    text: "Blonde",
    href: "#",
  },
  {
    image: "../images/good kid maad city album cover.png",
    text: "good kid, m.A.A.d city",
    href: "#",
  },
  {
    image: "../images/graduation album cover.png",
    text: "Graduation",
    href: "#",
  },
];

collectionCardsInfo.forEach((element) => {
  createCollectionCard(element.image, element.text, element.href);
});

function createCollectionCard(image, text, src) {
  let collectionCardCont = document.querySelector(".collectionsCont");
  let collectionCardAnchor = document.createElement("a");
  collectionCardAnchor.setAttribute("href", src);
  collectionCardAnchor.setAttribute("class", "m-5");
  let collectionCard = document.createElement("div");
  collectionCard.classList.add(
    "collection",
    "flex",
    "items-center",
    "rounded-md",
    "truncate"
  );
  let collectionImage = document.createElement("img");
  collectionImage.setAttribute("class", "collectionImage");
  collectionImage.src = image;
  let cardTitle = document.createElement("p");
  cardTitle.classList.add("text-white", "text-xl", "ms-3", "font-semibold");
  cardTitle.innerHTML = text;
  collectionCard.appendChild(collectionImage);
  collectionCard.appendChild(cardTitle);
  collectionCardAnchor.appendChild(collectionCard);
  collectionCardCont.appendChild(collectionCardAnchor);
  return collectionCardCont;
}

// creates songs
import songsArray from "../components/songs.js";

songsArray.forEach((song) => {
  createSongCard(
    song.name,
    song.creator,
    song.albumName,
    song.albumCover,
    song.timeLength,
    song.inedex
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

function changeSongNumToPlayBtnAndShowSaveBtn() {
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
      saveIcon.style.display = "none";
    });
  });
}
changeSongNumToPlayBtnAndShowSaveBtn();

// change saveIcon to active and save song
function saveSong() {
  let saveIcon = document.querySelectorAll('.saveIcon')
  console.log(saveIcon);
  saveIcon.forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.toggle('saveIconActive')
      icon.classList.toggle('fa-solid')
    })
  });
}
saveSong()