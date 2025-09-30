async function loadData() {
  const response = await fetch("../data/services.json");
  return await response.json();
}

async function loadTemplate(path) {
  const response = await fetch(path);
  return await response.text();
}
async function main() {

  const salon_V1 = await loadTemplate("../tmpl/services.tmpl")

  const site = await loadData()

  const header = salon_V1
    .replace(/{{nameEntreprise}}/g, site.header.nameEntreprise)
    .replace(/{{logo}}/g, site.header.logo)
    .replace(/{{image}}/g, site.header.image)
    .replace(/{{parafirst}}/g, site.section.parafirst)
    .replace(/{{categorie1}}/g, site.service.categorie1)
    .replace(/{{categorie2}}/g, site.service.categorie2)
    .replace(/{{categorie3}}/g, site.service.categorie3)
    .replace(/{{servicecardfemme1}}/g, site.service.servicecardfemme1)
    .replace(/{{servicecardfemme2}}/g, site.service.servicecardfemme2)
    .replace(/{{servicecardfemme3}}/g, site.service.servicecardfemme3)
    .replace(/{{servicecardhomme1}}/g, site.service.servicecardhomme1)
    .replace(/{{servicecardhomme2}}/g, site.service.servicecardhomme2)
    .replace(/{{servicecardhomme3}}/g, site.service.servicecardhomme3)
    .replace(/{{servicecardenfant1}}/g, site.service.servicecardenfant1)
    .replace(/{{servicecardenfant2}}/g, site.service.servicecardenfant2)
    .replace(/{{serviceparafemme1}}/g, site.service.serviceparafemme1)
    .replace(/{{serviceparafemme2}}/g, site.service.serviceparafemme2)
    .replace(/{{serviceparafemme3}}/g, site.service.serviceparafemme3)
    .replace(/{{serviceparahomme1}}/g, site.service.serviceparahomme1)
    .replace(/{{serviceparahomme2}}/g, site.service.serviceparahomme2)
    .replace(/{{serviceparahomme3}}/g, site.service.serviceparahomme3)
    .replace(/{{serviceparadenfant1}}/g, site.service.serviceparadenfant1)
    .replace(/{{serviceparadenfant2}}/g, site.service.serviceparadenfant2)
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
  // Burger menu pour services page
  const burger = document.getElementById('burger');
  const navUl = document.querySelector('nav ul');

  burger.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });

}

main()