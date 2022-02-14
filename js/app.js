function projectCard(item) {
  return `
      <div class="project">
  
        <img src=${item.icon} alt="" />
        <p class="project_title">${item.title}</p>
        <div class="project_actions">
           <a href=${item.github} target="_blank">source code</a>
           /
           <a href=${item.live} target="_blank">live demo</a>
        </div>
        <p class="project_desc">${item.desc}</p>
     
      </div>
      `;
}

function certificateCard(item) {
  return `
    <div class="certificate">
    <img src=${item.license} alt="quera college certificate license">
      <div class="certificate_info">
           <p>${item.rate}</p>
           <a href=${item.license} target="_blank">${item.title}</a>
      </div>
    </div>
  `;
}

const renderProjects = (cards) => {
  cards.forEach((item) => {
    let Card = document.createElement("div");
    Card.id = item.id;
    Card.className = "project";
    Card.innerHTML = projectCard(item);
    document.getElementById("projects").appendChild(Card);
  });
};

const renderCertificates = (cards) => {
  cards.forEach((item) => {
    let Card = document.createElement("div");
    Card.id = item.id;
    Card.className = "certificate";
    Card.innerHTML = certificateCard(item);
    document.getElementById("certificates").appendChild(Card);
  });
};

renderProjects(projects);
renderCertificates(certificates);
const year = new Date().getFullYear();
document.getElementById("copyright").append(`${year} Ⓒ all rights reserved `);
