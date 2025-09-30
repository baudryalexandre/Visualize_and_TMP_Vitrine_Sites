async function loadData() {
  const response = await fetch("../data/about.json");
  return await response.json();
}

async function loadTemplate(path) {
  const response = await fetch(path);
  return await response.text();
}
async function main() {

  const salon_V1 = await loadTemplate("../tmpl/about.tmpl")

  const site = await loadData()

  const header = salon_V1
    .replace(/{{nameEntreprise}}/g, site.header.nameEntreprise)
    .replace(/{{logo}}/g, site.header.logo)
    .replace(/{{image}}/g, site.header.image)
    .replace(/{{parafirst}}/g, site.section.parafirst)
    .replace(/{{paratwo}}/g, site.section.paratwo)
    .replace(/{{parathree}}/g, site.section.parathree)
    .replace(/{{parafour}}/g, site.section.parafour)
    .replace(/{{parafive}}/g, site.section.parafive)
    .replace(/{{parasix}}/g, site.section.parasix)
    .replace(/{{imageteam1}}/g, site.team.imageteam1)
    .replace(/{{imageteam2}}/g, site.team.imageteam2)
    .replace(/{{imageteam3}}/g, site.team.imageteam3)
    .replace(/{{nameteam1}}/g, site.team.nameteam1)
    .replace(/{{nameteam2}}/g, site.team.nameteam2)
    .replace(/{{nameteam3}}/g, site.team.nameteam3)
    .replace(/{{descriptionteam1}}/g, site.team.descriptionteam1)
    .replace(/{{descriptionteam2}}/g, site.team.descriptionteam2)
    .replace(/{{descriptionteam3}}/g, site.team.descriptionteam3)
    .replace(/{{valeur1}}/g, site.team.nameteam1)
    .replace(/{{valeur2}}/g, site.team.nameteam2)
    .replace(/{{valeur3}}/g, site.team.nameteam3)
    .replace(/{{descriptionvaleur1}}/g, site.team.descriptionteam1)
    .replace(/{{descriptionvaleur2}}/g, site.team.descriptionteam2)
    .replace(/{{descriptionvaleur3}}/g, site.team.descriptionteam3)
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