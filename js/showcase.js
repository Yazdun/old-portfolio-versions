const showcaseSocials = [
  {
    icon: "./assets/github_logo.svg",
    title: "github",
    url: "https://github.com/Yazdun",
  },
  {
    icon: "./assets/fem_logo.svg",
    title: "frontend-mentor",
    url: "https://www.frontendmentor.io/profile/Yazdun",
  },
  {
    icon: "./assets/codewars_logo.svg",
    title: "codewars",
    url: "https://www.codewars.com/users/Yazdun",
  },
  {
    icon: "./assets/linkedin_logo.svg",
    title: "linkedIn",
    url: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGyCwvTDrAo2QAAAX8NrjEQsuhRI0zkmHU03zwgapfy5CdcfMoTCviwVYTCePhKyR9snAw2Gw2gwWscqmCM-ejEofVtuKXUHXJaRx2XBUUevbRowAvZykYBkrNw5H0pJEj1f94=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fyazdun-fathali-330038232%2F",
  },
];

const renderShowcaseSocials = (social) => {
  return `
  <a href=${social.url} title=${social.title} target="_blank">
  <img src=${social.icon} alt=${social.title}>
  </a>`;
};

showcaseSocials.forEach((social) => {
  const ListItem = document.createElement("li");
  ListItem.innerHTML = renderShowcaseSocials(social);
  document.getElementById("showcaseSocials").appendChild(ListItem);
});

// timer

const showcaseSkills = [
  '<span class="current javascript"><i class="fa-brands fa-js-square"></i>javascript</span>',
  '<span class="current reactjs"><i class="fa-brands fa-react"></i>react js</span>',
  '<span class="current nodejs"><i class="fa-brands fa-node-js"></i> node js</span>',
  '<span class="current html"><i class="fa-brands fa-html5"></i> html</span>',
  '<span class="current css"><i class="fa-brands fa-css3"></i> css</span>',
  '<span class="current sass"><i class="fa-brands fa-sass"></i> sass</span>',
];

let prevIndex = 0;
let currentIndex = 1;

const current = document.getElementById("skills");
current.innerHTML = showcaseSkills[0];

const interval = setInterval(function () {
  current.innerHTML = showcaseSkills[currentIndex];
  currentIndex = currentIndex === 5 ? 0 : currentIndex + 1;
}, 3000);

interval();
clearInterval(interval);
