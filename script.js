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
    }, 5000);
  }

  // Generăm scântei și fulgi de cenușă continuu
  setInterval(() => {
    createParticle("spark");
    createParticle("ash");
  }, 200);

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
