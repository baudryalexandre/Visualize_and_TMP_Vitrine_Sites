const express = require('express');
const app = express();
const path = require('path');
const archiver = require('archiver');
const fs = require('fs');

const PORT = 3001;

// Servir tous les fichiers statiques
app.use(express.static(__dirname));

// Route dynamique pour télécharger un dossier en zip
// Exemple d'URL : /download?folder=salon_de_coiffure
app.get('/download', (req, res) => {
    const folderName = req.query.folder;
    if (!folderName) {
        return res.status(400).send('Paramètre "folder" manquant.');
    }

    const folderPath = path.join(__dirname, folderName);

    // Vérifier que le dossier existe
    if (!fs.existsSync(folderPath)) {
        return res.status(404).send('Dossier non trouvé.');
    }

    res.attachment(`${folderName}.zip`);

    const archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(res);
    archive.directory(folderPath, false);
    archive.finalize();
});

// Page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
