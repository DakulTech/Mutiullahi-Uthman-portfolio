const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

//contact

const contact_btn = document.getElementById("contact_btn");
const back_btn = document.getElementById("back_btn");
const contact_section = document.getElementById("contact_section");
const content_section = document.getElementById("content_section");

function showContact() {
  contact_btn.style.display = "none";
  back_btn.style.display = "block";

  content_section.style.display = "none";
  contact_section.style.display = "block";
  contact_section.classList.add("animate");

  setTimeout(function () {
    contact_section.classList.remove("animate");
  }, 500); // 500 is the same time as the CSS animation
}

function showContent() {
  contact_btn.style.display = "block";
  back_btn.style.display = "none";

  content_section.style.display = "block";
  contact_section.style.display = "none";
  content_section.classList.add("animate");

  setTimeout(function () {
    content_section.classList.remove("animate");
  }, 500); // 500 is the same time as the CSS animation
}

// ParticlesJS Background
particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 9.744926547616142,
                    "size_min": 1.6241544246026904,
                    "sync": true
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 150,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });



  const projects = [
    {
      title: "Project One",
      stack: "SolidJS, AppJS, SASS",
      github: "https://github.com/DakulTech",
      live: "https://ultracolinks.onrender.com/"
    },
    {
      title: "Project Two",
      stack: "HTML, JavaScript, PHP, SASS",
      github: "https://github.com/DakulTech",
      live: "https://tacoin.com.ng/index.php"
    },
    {
      title: "Project Three",
      stack: "HTML, JavaScript, Bootstrap, SASS",
      github: "https://github.com/DakulTech",
      live: "https://code-with-jtrfwxe7a-dakultech.vercel.app/#"
    },
    {
      title: "Project Four",
      stack: "HTML5, SASS",
      github: "https://github.com/DakulTech",
      live: "https://judeadeniji.github.io/buyme/"
    },
    {
      title: "Project Five",
      stack: "HTML5, JavaScript, SASS",
      github: "https://github.com/DakulTech",
      live: "https://de-embeez.netlify.app/index.html#"
    },
    {
      title: "Project Six",
      stack: "HTML5, SASS",
      github: "https://github.com/DakulTech",
      live: "https://dakultech.github.io/TeeHub-Home/"
    }
  ];

  const container = document.getElementById("projects-grid");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3 class="project-title">${project.title}</h3>
      <p class="project-stack">${project.stack}</p>
      <div class="project-links">
        <a href="${project.github}" target="_blank" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="${project.live}" target="_blank" aria-label="Live Site">
          <i class="fas fa-globe"></i>
        </a>
      </div>
    `;
    container.appendChild(card);
  });





