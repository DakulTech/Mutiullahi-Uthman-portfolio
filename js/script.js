// 🌙 Theme Switcher
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
if (toggleSwitch) {
  toggleSwitch.addEventListener("change", switchTheme);

  function switchTheme(e) {
    const theme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleSwitch.checked = currentTheme === "dark";
  }
}

// 📱 Mobile Navbar Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}

// 🗓️ Footer Date
const myDate = document.querySelector("#datee");
if (myDate) {
  myDate.innerHTML = new Date().getFullYear();
}

// ✉️ Contact Form Toggle (on contact.html only)
const contact_btn = document.getElementById("contact_btn");
const back_btn = document.getElementById("back_btn");
const contact_section = document.getElementById("contact_section");
const content_section = document.getElementById("content_section");

if (contact_btn && back_btn && contact_section && content_section) {
  contact_btn.addEventListener("click", showContact);
  back_btn.addEventListener("click", showContent);

  function showContact() {
    contact_btn.style.display = "none";
    back_btn.style.display = "block";
    content_section.style.display = "none";
    contact_section.style.display = "block";
    contact_section.classList.add("animate");
    setTimeout(() => contact_section.classList.remove("animate"), 500);
  }

  function showContent() {
    contact_btn.style.display = "block";
    back_btn.style.display = "none";
    content_section.style.display = "block";
    contact_section.style.display = "none";
    content_section.classList.add("animate");
    setTimeout(() => content_section.classList.remove("animate"), 500);
  }
}

// ✨ Particles Background
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
      opacity: { value: 0.5 },
      size: { value: 4, random: true, anim: { enable: true, speed: 10, size_min: 1, sync: true } },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 3, out_mode: "out" }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        repulse: { distance: 150, duration: 0.4 }
      }
    },
    retina_detect: true
  });
}

// 💼 Projects Section (only on projects.html)
const container = document.getElementById("projects-grid");
const showMoreBtn = document.getElementById("show-more");

if (container && showMoreBtn) {
  const allProjects = [
    {
      title: "Dakul-Delights",
      stack: "MERN",
      github: "https://github.com/DakulTech",
      live: "https://dakul-delights.vercel.app/",
      image: "assets/projects/project1.png"
    },
    {
      title: "SereneSuites",
      stack: "React-Vite, NodeJS, MongoDB, Clerk, Express",
      github: "https://github.com/DakulTech",
      live: "https://serene-suites.vercel.app/",
      image: "assets/projects/project2.png"
    },
    {
      title: "School Portal",
      stack: "ReactJS, NodeJS, ExpressJS, MongoDB, Cloudinary",
      github: "https://github.com/DakulTech",
      live: "https://raodotulirfaan.vercel.app/",
      image: "assets/projects/project3.png"
    },
    {
      title: "Pelz Secret",
      stack: "HTML5, JavaScript, CSS, NodeJS, Express, MongoDB, Cloudinary",
      github: "https://github.com/DakulTech",
      live: "https://pelzsecret.com.ng/",
      image: "assets/projects/project4.png"
    },
    {
      title: "De-embeez",
      stack: "HTML5, JavaScript, SASS",
      github: "https://github.com/DakulTech",
      live: "https://de-embeez.netlify.app/index.html#",
      image: "assets/projects/project5.png"
    },
    {
      title: "TeeHub",
      stack: "HTML5, SASS",
      github: "https://github.com/DakulTech",
      live: "https://dakultech.github.io/TeeHub-Home/",
      image: "assets/projects/project6.png"
    },
    {
      title: "Project Seven",
      stack: "Next.js, Tailwind CSS, MongoDB",
      github: "https://github.com/DakulTech",
      live: "https://next-dakul-project.vercel.app",
      image: "assets/projects/project7.png"
    },
    {
      title: "Project Eight",
      stack: "React, Firebase, SCSS",
      github: "https://github.com/DakulTech",
      live: "https://react-chat-dakul.netlify.app",
      image: "assets/projects/project8.png"
    },
    {
      title: "Project Nine",
      stack: "Vue, Node.js, CSS",
      github: "https://github.com/DakulTech",
      live: "https://vue-playground-dakul.netlify.app",
      image: "assets/projects/project9.png"
    }
  ];

  let visibleCount = 6;

  function renderProjects(start, end) {
    allProjects.slice(start, end).forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-img" />
        <div class="project-info">
          <div class="project-bio">
            <h3>${project.title}</h3>
            <p>${project.stack}</p>
          </div>
          <div class="project-link">
            <a href="${project.github}" target="_blank"><i class="fab fa-github"></i></a>
            <a href="${project.live}" target="_blank"><i class="fas fa-globe"></i></a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderProjects(0, visibleCount);

  showMoreBtn.addEventListener("click", e => {
    e.preventDefault();
    renderProjects(visibleCount, allProjects.length);
    showMoreBtn.style.display = "none";
  });
}