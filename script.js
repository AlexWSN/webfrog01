document.addEventListener("DOMContentLoaded", function () {
  // Funcția care creează particule
  function createParticle(type) {
    const particle = document.createElement("div");
    particle.classList.add(type);
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 10 + 1}s`;

    document.querySelector(".background").appendChild(particle);

    // Eliminăm particula după terminarea animației
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }

  // Generăm scântei și fulgi de cenușă continuu
  setInterval(() => {
    createParticle("spark");
    createParticle("ash");
  }, 200);

  // Modifică intervalul animațiilor particulelor pe mobil
  if (window.innerWidth <= 768) {
    setInterval(() => {
      createParticle("spark");
      createParticle("ash");
    }, 300); // Crește intervalul pentru a reduce sarcina
  } else {
    setInterval(() => {
      createParticle("spark");
      createParticle("ash");
    }, 200); // Păstrează intervalul mai scurt pe desktop
  }

  // Obținem modalul și elementele asociate
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  // Funcția care deschide modalul
  window.openModal = function (image) {
    modal.style.display = "block";
    modalImg.src = image.src;
  };

  // Închidem modalul când dai click pe "x"
  var closeModal = document.getElementsByClassName("close")[0];
  if (closeModal) {
    closeModal.onclick = function () {
      modal.style.display = "none";
    };
  }

  // Închidem modalul când dai click în afara imaginii
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Codul pentru meniul burger
  const burger = document.querySelector(".menu-toggle");
  const sideMenu = document.querySelector(".side-menu");
  const closeMenu = document.querySelector(".close-menu");
  const navMenu = document.querySelector(".button-container");

  // Verificăm dacă butonul burger și meniul există înainte de a le manipula
  if (burger && navMenu) {
    burger.addEventListener("click", function () {
      console.log("Butonul hamburger a fost apăsat."); // Debug message
      navMenu.classList.toggle("active");

      // Verifică dacă meniul a fost activat
      if (navMenu.classList.contains("active")) {
        console.log("Meniul este acum activ.");
      } else {
        console.log("Meniul este acum inactiv.");
      }
    });
  }
  // Verificăm dacă butonul burger și meniul există înainte de a le manipula
  if (burger && sideMenu) {
    // Când se apasă pe butonul hamburger (pentru mobil)
    burger.addEventListener("click", function () {
      console.log("Butonul hamburger a fost apăsat.");
      sideMenu.classList.toggle("active"); // Activează meniul lateral

      // Verifică dacă meniul lateral este activ
      if (sideMenu.classList.contains("active")) {
        console.log("Meniul lateral este acum activ.");
      } else {
        console.log("Meniul lateral este acum inactiv.");
      }
    });
  }

  // Închide meniul lateral atunci când apesi pe butonul "Close" (pe mobil)
  if (closeMenu) {
    closeMenu.addEventListener("click", function () {
      sideMenu.classList.remove("active");
      console.log("Meniul lateral a fost închis.");
    });
  }

  // Închide meniul dacă dai click în afara lui (pe mobil)
  document.addEventListener("click", function (event) {
    if (!sideMenu.contains(event.target) && !burger.contains(event.target)) {
      sideMenu.classList.remove("active");
      console.log("Meniul lateral a fost închis (click în afara meniului).");
    }
  });

  // Gestionarea popup-urilor
  const popups = document.querySelectorAll(".popup");
  const closeButtons = document.querySelectorAll(".close");

  // Funcția de deschidere a popup-ului
  function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "block";
    }
  }

  // Funcția de închidere a popup-ului
  function closePopup() {
    popups.forEach((popup) => {
      popup.style.display = "none";
    });
  }

  // Adaugă evenimentul pentru butoanele de deschidere
  document.querySelectorAll(".service-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const popupId = button.getAttribute("data-popup");
      openPopup(popupId);
    });
  });

  // Adaugă evenimentul de închidere pentru fiecare buton 'close'
  closeButtons.forEach((button) => {
    button.addEventListener("click", closePopup);
  });

  // Închide popup-ul dacă se dă click în afară
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("popup")) {
      closePopup();
    }
  });

  // Procesarea formularului la trimitere
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Previne comportamentul implicit al formularului (reîncărcarea paginii)

      // Preluarea valorilor din formular
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Validarea datelor
      if (name && email && subject && message) {
        // Dacă toate câmpurile sunt completate corect, trimitem datele
        document.getElementById(
          "formResponse"
        ).innerHTML = `<p>Cheers, ${name}! All done, message delivered!</p>`;
        document.getElementById("formResponse").style.color = "orange";

        // Resetăm formularul
        document.getElementById("contactForm").reset();
      } else {
        // Dacă există câmpuri necompletate
        document.getElementById("formResponse").innerHTML =
          "<p>Complete all fields!</p>";
        document.getElementById("formResponse").style.color = "red";
      }
    });
});
