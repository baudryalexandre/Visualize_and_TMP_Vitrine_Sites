async function loadData() {
    const response = await fetch("../data/price.json");
    return await response.json();
}

async function loadTemplate(path) {
    const response = await fetch(path);
    return await response.text();
}
async function main() {

    const salon_V1 = await loadTemplate("../tmpl/price.tmpl")

    const site = await loadData()

    const header = salon_V1
        .replace(/{{nameEntreprise}}/g, site.header.nameEntreprise)
        .replace(/{{logo}}/g, site.header.logo)
        .replace(/{{image}}/g, site.header.image)
        .replace(/{{parafirst}}/g, site.section.parafirst)

        .replace(/{{categorie1}}/g, site.category.categorie1)
        .replace(/{{categorie2}}/g, site.category.categorie2)
        .replace(/{{categorie3}}/g, site.category.categorie3)

        .replace(/{{service1femme}}/g, site.category.service1femme)
        .replace(/{{service2femme}}/g, site.category.service2femme)
        .replace(/{{service3femme}}/g, site.category.service3femme)
        .replace(/{{service4femme}}/g, site.category.service4femme)
        .replace(/{{service5femme}}/g, site.category.service5femme)
        .replace(/{{service6femme}}/g, site.category.service6femme)
        .replace(/{{service7femme}}/g, site.category.service7femme)

        .replace(/{{service1homme}}/g, site.category.service1homme)
        .replace(/{{service2homme}}/g, site.category.service2homme)
        .replace(/{{service3homme}}/g, site.category.service3homme)
        .replace(/{{service4homme}}/g, site.category.service4homme)
        .replace(/{{service5homme}}/g, site.category.service5homme)

        .replace(/{{service1enfant}}/g, site.category.service1enfant)
        .replace(/{{service2enfant}}/g, site.category.service2enfant)
        .replace(/{{service3enfant}}/g, site.category.service3enfant)

        .replace(/{{price1femme}}/g, site.category.price1femme)
        .replace(/{{price2femme}}/g, site.category.price2femme)
        .replace(/{{price3femme}}/g, site.category.price3femme)
        .replace(/{{price4femme}}/g, site.category.price4femme)
        .replace(/{{price5femme}}/g, site.category.price5femme)
        .replace(/{{price6femme}}/g, site.category.price6femme)
        .replace(/{{price7femme}}/g, site.category.price7femme)

        .replace(/{{price1homme}}/g, site.category.price1homme)
        .replace(/{{price2homme}}/g, site.category.price2homme)
        .replace(/{{price3homme}}/g, site.category.price3homme)
        .replace(/{{price4homme}}/g, site.category.price4homme)
        .replace(/{{price5homme}}/g, site.category.price5homme)

        .replace(/{{price1enfant}}/g, site.category.price1enfant)
        .replace(/{{price2enfant}}/g, site.category.price2enfant)
        .replace(/{{price3enfant}}/g, site.category.price3enfant)

        .replace(/{{note}}/g, site.category.note)

        .replace(/{{horairejeudi}}/g, site.footer.horairejeudi)
        .replace(/{{horairevendredi}}/g, site.footer.horairevendredi)
        .replace(/{{horairesamedi}}/g, site.footer.horairesamedi)
        .replace(/{{horairedimanche}}/g, site.footer.horairedimanche)
        .replace(/{{reseausociaux1}}/g, site.footer.reseausociaux1)
        .replace(/{{reseausociaux2}}/g, site.footer.reseausociaux2)
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

    // Burger menu pour gallery page
    const burger = document.getElementById('burger');
    const navUl = document.querySelector('nav ul');

    burger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

}

main()