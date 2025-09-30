async function loadData() {
    const response = await fetch("index.json");
    return await response.json();
}

async function loadTemplate(path) {
    const response = await fetch(path);
    return await response.text();
}
async function main() {

    const salon_V1 = await loadTemplate("./index.tmpl")

    const site = await loadData()

    const header = salon_V1
        .replace(/{{nameEntreprise}}/g, site.header.nameEntreprise)
        .replace(/{{logo}}/g, site.header.logo)
        .replace(/{{image}}/g, site.header.image)
        .replace(/{{parafirstslide}}/g, site.section.parafirstslide)
        .replace(/{{parasecondslide}}/g, site.section.parasecondslide)
        .replace(/{{parathirdslide}}/g, site.section.parathirdslide)
        .replace(/{{title1}}/g, site.section.title1)
        .replace(/{{title2}}/g, site.section.title2)
        .replace(/{{title3}}/g, site.section.title3)
        .replace(/{{h2}}/g, site.presentation.h2)
        .replace(/{{textepresentation}}/g, site.presentation.textepresentation)
        .replace(/{{serviceone}}/g, site.service.serviceone)
        .replace(/{{servicetwo}}/g, site.service.servicetwo)
        .replace(/{{servicethree}}/g, site.service.servicethree)
        .replace(/{{descriptionserviceone}}/g, site.service.descriptionserviceone)
        .replace(/{{descriptionservicetwo}}/g, site.service.descriptionservicetwo)
        .replace(/{{descriptionservicethree}}/g, site.service.descriptionservicethree)
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

    let slides = document.querySelectorAll('.slide');
    let current = 0;

    function showSlide(nextIndex) {
        const prevIndex = current;
        current = nextIndex;

        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');

            if (i === prevIndex) slide.classList.add('prev');   // slide sortante
            if (i === current) slide.classList.add('active');  // slide entrante
        });
    }

    function nextSlide() {
        const nextIndex = (current + 1) % slides.length;
        showSlide(nextIndex);
    }

    setInterval(nextSlide, 5000);
}

main()