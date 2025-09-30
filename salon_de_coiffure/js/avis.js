// Sélection des éléments du DOM
const container = document.getElementById("testimonial-container"); // conteneur des avis
const form = document.getElementById("review-form");                // formulaire
const nameInput = document.getElementById("name");                  // input nom
const ratingInput = document.getElementById("rating");              // input note (hidden)
const messageInput = document.getElementById("message");            // textarea message
const stars = document.querySelectorAll(".rating-input span");      // étoiles cliquables

// --- Chargement des avis depuis localStorage ---
// Si aucun avis enregistré, on utilise des exemples, sauvergarde tout les commentaire créer
// let reviews = JSON.parse(localStorage.getItem("reviews")) || [
//   { name: "Alice", rating: 5, message: "Excellent service, très professionnel !" },
//   { name: "Bob", rating: 4, message: "Bonne expérience globale, je recommande." }
// ];

//permet de ne pas garder les avis créer
let reviews = [
  { name: "Alice", rating: 5, message: "Excellent service, très professionnel !" },
  { name: "Bob", rating: 4, message: "Bonne expérience globale, je recommande." }
];
localStorage.removeItem("reviews"); // supprime les anciens avis


// --- Fonction pour afficher les avis ---
function displayReviews() {
  container.innerHTML = ""; // vider le conteneur avant affichage
  reviews.forEach(review => {
    const div = document.createElement("div");
    div.classList.add("testimonial"); // classe pour le style CSS
    div.innerHTML = `
      <h3>${review.name}</h3>
      <div class="rating">${"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}</div>
      <p>${review.message}</p>
    `;
    container.appendChild(div);
  });
}

// --- Gestion des étoiles cliquables ---
stars.forEach((star, index) => {

  // Survol d'une étoile
  star.addEventListener("mouseover", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("hover");
      } else {
        s.classList.remove("hover");
      }
    });
  });

  // Sortie de la souris
  star.addEventListener("mouseout", () => {
    stars.forEach(s => s.classList.remove("hover"));
  });

  // Clic sur une étoile
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("selected");
      } else {
        s.classList.remove("selected");
      }
    });
    ratingInput.value = star.dataset.value; // mettre la valeur dans le hidden input
  });
});

// --- Gestion du formulaire ---
form.addEventListener("submit", function (e) {
  e.preventDefault(); // empêcher le rechargement de page

  // Récupération des valeurs
const name = nameInput.value.trim();
const rating = parseInt(ratingInput.value);
const message = messageInput.value.trim(); // peut être vide

// Vérification obligatoire uniquement pour nom et note
if(!name || !rating) {
  alert("Veuillez remplir votre nom et sélectionner une note !");
  return;
}


  // Création de l'avis
  const newReview = { name, rating, message };
  reviews.push(newReview);            // ajout à la liste
  localStorage.setItem("reviews", JSON.stringify(reviews)); // sauvegarde dans localStorage

  displayReviews(); // mise à jour affichage

  // Réinitialisation du formulaire et étoiles
  form.reset();
  stars.forEach(s => s.classList.remove("selected"));
  ratingInput.value = "";
});

// --- Affichage initial des avis ---
displayReviews();

// --- Gestion burger menu pour mobile ---
const burger = document.getElementById('burger');
const navUl = document.querySelector('nav ul');
burger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});
