const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const serv = express();

// Configuration du serveur
serv.use(bodyParser.urlencoded({ extended: true }));
serv.set('view engine', 'ejs');
serv.set('views', path.join(__dirname, 'views')); // Corrected from 'view' to 'views'
serv.use(express.static(path.join(__dirname, 'public')));


// Middleware pour logger les demandes
serv.use((req, res, next) => {
    console.log(`Demande reçue: ${req.method} ${req.url}`);
    next(); // Passe à la route suivante ou middleware
});

// Données initiales des étudiants
let etudiants = [
    { numero: 20210101, nom: 'Dupont', prenom: 'Jean' },
    { numero: 20221212, nom: 'Martin', prenom: 'Marie' },
    { numero: 20211312, nom: 'Durand', prenom: 'Pierre' }
];

// Route pour la page d'accueil
serv.get('/', function(req, res) {
    res.render('welcome', { nom: 'VotreNom', prenom: 'VotrePrenom' }); // Modifier avec vos informations
});

// Route spécifique pour un numéro d'étudiant donné
serv.get('/22110569', function(req, res) {
    res.send('<h1>Page Spéciale pour l\'étudiant 22110569</h1><p>Ce message est différent des autres.</p>');
});

// Route pour afficher les détails d'un étudiant
serv.get('/etud/:numero', function(req, res) {
    const numero = parseInt(req.params.numero);
    const etudiant = etudiants.find(etudiant => etudiant.numero === numero);
    if(etudiant) {
        res.render('etudiant', { etudiant });
    } else {
        res.status(404).send('Etudiant non trouvé');
    }
});

// Route pour afficher tous les étudiants
serv.get('/etudiantes', (req, res) => {
    res.render('etudiantes', { etudiants: etudiants });
});


// Route pour le formulaire d'ajout d'étudiants
serv.get('/ajouter', (req, res) => {
    res.render('ajouter');
});

// Traitement du formulaire d'ajout d'étudiants
serv.post('/ajouter', (req, res) => {
    const { numero, nom, prenom } = req.body;
    etudiants.push({ numero: parseInt(numero), nom, prenom });
    res.redirect('/etudiantes');
});

// Route pour filtrer les étudiants par prénom
serv.get('/prenom/:prenom', (req, res) => {
    const prenom = req.params.prenom;
    const etudiantsFiltres = etudiants.filter(etudiant => etudiant.prenom.toLowerCase() === prenom.toLowerCase());
    res.render('etudiantes', { etudiants: etudiantsFiltres });
});

// Démarrage du serveur
serv.listen(8080, () => {
    console.log("Le serveur est en écoute sur le port 8080");
});
