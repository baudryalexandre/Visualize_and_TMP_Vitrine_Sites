# PINUP'S COIFFURE – Site vitrine

**Projet :** Site vitrine pour le salon de coiffure “PINUP'S COIFFURE”
**Technologies :** HTML5, CSS3, JavaScript
**Style :** Noir et doré, chic et élégant

---

## Table des matières

1. [Description du projet](#description-du-projet)
2. [Structure du projet](#structure-du-projet)
3. [Pages du site](#pages-du-site)
4. [Couleurs et typographie](#couleurs-et-typographie)
5. [Fonctionnalités](#fonctionnalités)
6. [Installation et utilisation](#installation-et-utilisation)
7. [Licence](#licence)

---

## Description du projet

Le site vitrine **“PINUP'S COIFFURE”** présente le salon de coiffure situé à Rouen.
Il met en avant les services pour femmes, hommes et enfants, les avis clients, une galerie de réalisations, ainsi que les informations de contact.

Le design est **élégant et moderne**, utilisant le noir comme couleur de fond et un rouge profond (`#C62828`) pour les accents et éléments importants.

---

## Structure du projet

```
pinup's coiffure/
├─ index.html
├─ css/
│   ├─ header.css
│   ├─ footer.css
│   ├─ style.css
│   ├─ about.css
│   ├─ services.css
│   ├─ gallery.css
│   ├─ contact.css
│   └─ avis.css
├─ js/
│   ├─ script.js
│   ├─ about.js
│   ├─ services.js
│   ├─ gallery.js
│   ├─ contact.js
│   └─ avis.js
├─ html/
|   ├─ about.html
|   ├─ services.html
|   ├─ gallery.html
|   ├─ contact.html
|   └─ avis.html
├─ images/
├─ fonts/
└─ README.md
```

---

## Pages du site

* **index.html** : Page d’accueil avec présentation du salon et mise en avant des services.
* **about.html** : Histoire du salon et vision de la coiffure.
* **services.html** : Liste des prestations et techniques maîtrisées.
* **gallery.html** : Galerie photos des réalisations du salon.
* **contact.html** : Formulaire de contact et informations pour prendre rendez-vous.
* **avis.html** : Avis clients avec formulaire interactif et système d’étoiles.

---

## Couleurs et typographie

### Couleurs principales

| Élement                | Couleur   | Code Hex |
| ---------------------- | --------- | -------- |
| Rouge accent / boutons | Rouge vif | #C62828  |
| Fond / sections        | Noir      | #000000  |
| Étoiles / détails      | Doré      | #FFD700  |
| Texte principal        | Blanc     | #FFFFFF  |

### Polices

* **Playfair Display** : Titres et accents chic
* **Montserrat** : Texte courant et paragraphes

---

## Fonctionnalités

* Header et footer **réutilisables** sur toutes les pages
* Menu burger pour **responsive design**
* Formulaire de contact et avis interactif (stockage temporaire via localStorage)
* Étoiles cliquables pour avis clients
* Effets modernes et animations pour les cartes et sections
* Mise en page **responsive** pour mobile et tablette

---

## Installation et utilisation

1. **Télécharger ou cloner** le projet :

```bash
git clone https://github.com/ton-compte/pinup's_coiffure.git
```

2. **Ouvrir une page HTML** dans un navigateur pour visualiser le site :

```bash
index.html
```

3. Pour le formulaire d’avis, les données sont stockées **localement dans le navigateur** via `localStorage`.

> Pour réinitialiser les avis : ouvrir la console et exécuter `localStorage.removeItem('reviews')`.

---

## Licence

Ce projet est **privé pour usage personnel et professionnel**.
Toute reproduction ou redistribution nécessite l’accord de l’auteur.

---

**PINUP'S COIFFURE – Salon de coiffure élégant à Rouen**
