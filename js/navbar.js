const navLinks = [
  {
    title: "home",
    target: "#showcase",
    icon: "fa-solid fa-house-chimney-crack",
  },
  {
    title: "projects",
    target: "#projects",
    icon: "fa-solid fa-laptop-code",
  },
  {
    title: "certificates",
    target: "#certificates",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    title: "contact",
    target: "#contact",
    icon: "fa-solid fa-phone",
  },
];

const renderNavLinks = (navLink) => {
  return `<a href=${navLink.target}>
  <i class="${navLink.icon}"></i>
  <span>${navLink.title}</span></a>`;
};

navLinks.forEach((navLink) => {
  const ListItem = document.createElement("li");
  ListItem.innerHTML = renderNavLinks(navLink);
  document.getElementById("navigation").appendChild(ListItem);
});
