
// ----------------------------------- code for the drop-down menu in header__language ----------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.querySelectorAll(".header__language");

  languageSelector.forEach(item => {
    item.addEventListener("click", (e) => {
      const languageList = e.currentTarget.querySelector('.language__list');
      languageList.style.display = (languageList.style.display === "block") ? "none" : "block";
    });
  });



// --------- script from the documentation on inserting an input with selecting the country code for the phone number ---------

  const input = document.querySelector("#phone");
  if (input) {
    window.intlTelInput(input, {
      initialCountry: "ua",
      nationalMode: false,
      preferredCountries: ['ua', 'pl'],
      customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
        return `+${selectedCountryData?.dialCode}-98-456-33-12`;
      },
      utilsScript: "../scripts/utils.js",
    });
  }
});

// ---------------------------------- day and year number generator for <select> --------------------------------------------


const daySelect = document.getElementById('day');
const yearSelect = document.getElementById('year');

if (daySelect && yearSelect) {
  generateDays();
  generateYears();
}

function generateDays() {
  const daysInMonth = 31;

  for (let i = 1; i <= daysInMonth; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    daySelect.appendChild(option);
  }
}


function generateYears() {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 100;
  const endYear = currentYear + 10;

  for (let i = startYear; i <= endYear; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
  }
}


// --------------------- arrow animation ---------------- 

function createBlinkingAnimation(element) {
  return gsap.to(element, {
    opacity: 0.1,
    yoyo: true,
    repeat: -1,
    duration: 1,
  });
}

const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');

if(arrow1 && arrow2 && arrow3) {
	
  const animation1 = createBlinkingAnimation(arrow1);
  const animation2 = createBlinkingAnimation(arrow2);
  const animation3 = createBlinkingAnimation(arrow3);


  gsap.timeline().add(animation1).add(animation2, '-=0.3').add(animation3, '-=0.5');
}



// ---------------------------- background animation --------------------------------

const particle = document.getElementById('#particles-js');

if (particle) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } },
      color: { value: "#4073AA" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 6,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#2D5D90",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
}
