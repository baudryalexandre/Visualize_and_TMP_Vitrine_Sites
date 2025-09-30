async function loadData() {
    const response = await fetch("../data/contact.json");
    return await response.json();
}

async function loadTemplate(path) {
    const response = await fetch(path);
    return await response.text();
}
async function main() {

    const salon_V1 = await loadTemplate("../tmpl/contact.tmpl")

    const site = await loadData()

    const header = salon_V1
        .replace(/{{nameEntreprise}}/g, site.header.nameEntreprise)
        .replace(/{{logo}}/g, site.header.logo)
        .replace(/{{image}}/g, site.header.image)
        .replace(/{{parafirst}}/g, site.section.parafirst)
        .replace(/{{copydate}}/g, site.footer.copydate)
        .replace(/{{copyname}}/g, site.footer.copyname)
        .replace(/{{adresse}}/g, site.footer.adresse)
        .replace(/{{telephone}}/g, site.footer.telephone)
        .replace(/{{mapping}}/g, site.footer.mapping)
        .replace(/{{horairelundi}}/g, site.footer.horairelundi)
        .replace(/{{horairemardi}}/g, site.footer.horairemardi)
        .replace(/{{horairemercredi}}/g, site.footer.horairemercredi)
        .replace(/{{horairejeudi}}/g, site.footer.horairejeudi)
        .replace(/{{horairevendredi}}/g, site.footer.horairevendredi)
        .replace(/{{horairesamedi}}/g, site.footer.horairesamedi)
        .replace(/{{horairedimanche}}/g, site.footer.horairedimanche)
        .replace(/{{reseausociaux1}}/g, site.footer.reseausociaux1)
        .replace(/{{reseausociaux2}}/g, site.footer.reseausociaux2)

    document.body.innerHTML = header

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
}
main()