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
  let songsCont = document.querySelector(".songs");

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

  let songAlbumCoverCont = document.createElement("div");
  songAlbumCoverCont.classList.add(
    "whitespace-nowrap",
    "flex",
    "items-center",
    "gap-5"
  );

  let songNumberCont = document.createElement("div");
  songNumberCont.classList.add("songNumbercont");

  let songNumber = document.createElement("p");
  songNumber.classList.add("text-xl", "text-gray-400", "songNumber");
  songNumber.innerHTML = index;

  let playIcon = document.createElement("i");
  playIcon.classList.add("fa-solid", "fa-play", "songPlayBtn");
  playIcon.style.color = "white";

  let albumCoverPhoto = document.createElement("img");
  albumCoverPhoto.src = albumCover;
  albumCoverPhoto.alt = "albumCoverPhoto";
  albumCoverPhoto.style.height = "65px";
  albumCoverPhoto.style.width = "65px";

  let albumCoverMoreInfo = document.createElement("div");
  let songName = document.createElement("p");
  songName.classList.add("font-semibold");
  songName.innerHTML = name;
  let creatorName = document.createElement("p");
  creatorName.classList.add("text-gray-400");
  creatorName.innerHTML = creator;

  let albumName = document.createElement("p");
  albumName.classList.add("justify-self-center", "ps-4");
  albumName.innerHTML = albumName1;
  let timeLength = document.createElement("p");
  timeLength.classList.add("justify-self-end");
  timeLength.innerHTML = time;

  albumCoverMoreInfo.appendChild(songName),
    albumCoverMoreInfo.appendChild(creatorName),
    songNumberCont.appendChild(songNumber);
  songNumberCont.appendChild(playIcon);
  songAlbumCoverCont.appendChild(songNumberCont);
  songAlbumCoverCont.appendChild(albumCoverPhoto);
  songAlbumCoverCont.appendChild(albumCoverMoreInfo);
  songCard.appendChild(songAlbumCoverCont);
  songCard.appendChild(albumName);
  songCard.appendChild(timeLength);
  songsCont.appendChild(songCard);
}

function changeSongNumToPlayBtn() {
  let songCard = document.querySelectorAll(".song");

  songCard.forEach((song) => {
    let songNumberCont = song.querySelector(".songNumbercont");

    let songNum = song.querySelector(".songNumber");

    let playIcon = song.querySelector(".songPlayBtn");

    song.addEventListener("mouseover", function () {
      songNum.style.display = "none";
      playIcon.style.display = "block";
    });

    song.addEventListener("mouseout", function () {
      songNum.style.display = "block";
      playIcon.style.display = "none";
    });
  });
}
changeSongNumToPlayBtn();