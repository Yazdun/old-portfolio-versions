const projects = [
  {
    title: "node.js novels api",
    icon: "fa-brands fa-node",
    stack: ["node.js", "express.js", "mongodb", "jwt"],
    sourceCodeUrl: "https://github.com/Yazdun/nodejs-novels",
    liveUrl: "https://nodejs-novels.herokuapp.com/",
    desc: "CRUD functionality for novels and authors, user authentication, review and rating system and much more cool features !",
  },
  {
    title: "react novels public",
    icon: "fa-brands fa-react",
    stack: ["react.js", "sass"],
    sourceCodeUrl: "https://github.com/Yazdun/react-novels-public",
    liveUrl: "https://react-novels-public.netlify.app/",
    desc: "UI for novels api, crafted all elements, components and animations from scrach without using any third-party library !",
  },

  {
    title: "react novels admin",
    icon: "fa-brands fa-react",
    stack: ["react.js", "sass"],
    sourceCodeUrl: "https://github.com/Yazdun/react-novels-admin",
    liveUrl: "https://react-novels-admin.netlify.app/",
    desc: "Admin panel for novels API, contains users and reviews analytics, novel and authors management. built from scratch ! ",
  },

  {
    title: "frontend mentor challenges",
    icon: "fa-solid fa-code",
    stack: ["react.js", "sass"],
    sourceCodeUrl: "https://github.com/Yazdun/frontend_mentor",
    liveUrl: "https://www.frontendmentor.io/profile/Yazdun",
    desc: "Frontend mentor is an awesome platform to sharpen your frontend skills, I use every chance I get to dive into a FEM challenge !",
  },
];

const renderProject = (project) => {
  return `<i class="${project.icon}"></i>
          <p class="project__title">${project.title}</p>

          <p class="project__desc">
            ${project.desc}
          </p>
          <div class="project__links">
          <a href=${project.liveUrl} target="_blank" title="live demo">
          <i class="fa-solid fa-earth-americas"></i>
          </a>
          <a href=${project.sourceCodeUrl} target="_blank" title="source code">
          <i class="fa-brands fa-github"></i>
          </a>`;
};

projects.forEach((projects) => {
  const Project = document.createElement("div");
  Project.classList = "project";
  Project.innerHTML = renderProject(projects);
  document.getElementById("projectsGrid").appendChild(Project);
});
