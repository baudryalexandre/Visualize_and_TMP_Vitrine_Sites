async function loadData() {
    const response = await fetch("../data/mention.json");
    return await response.json();
}

async function loadTemplate(path) {
    const response = await fetch(path);
    return await response.text();
}
async function main() {

    const salon_V1 = await loadTemplate("../tmpl/mention.tmpl")

    const site = await loadData()

    const header = salon_V1
        .replace(/{{nameEntreprise}}/g, site.header.nameEntreprise)
        .replace(/{{logo}}/g, site.header.logo)
        .replace(/{{image}}/g, site.header.image)
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

    // Menu burger responsive
    const burger = document.getElementById('burger');
    const navUl = document.querySelector('nav ul');

    burger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

}

main()