// Burger menu pour contact page
const burger = document.getElementById('burger');
const navUl = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});


// Initialisation d'EmailJS
(function () {
    emailjs.init("kduBzZEV46HHYUSRs"); //user ID public EmailJS
})();

// Initialisation de Notyf pour les notifications
const notyf = new Notyf();

// Attache l'événement au formulaire
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Empêche le rechargement de la page

            emailjs.sendForm('service_kcxhmsc', 'template_rop1777', form)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    notyf.success('Message envoyé avec succès!');
                    form.reset(); // Réinitialise le formulaire après envoi
                }, function (error) {
                    console.log('FAILED...', error);
                    notyf.error("Échec de l'envoi du message.");
                });
        });
    }
});
