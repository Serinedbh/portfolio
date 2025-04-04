// Tableau des projets
const projets = [
    {
        nom: 'Calculatrice',
        description: 'Une calculatrice simple réalisée en JavaScript.',
        technologies: 'HTML, CSS, JavaScript',
        image: 'calculatrice.jpg',
        lien: 'https://serinedbh.github.io/calculatrice/'
    },
    {
        nom: 'Site E-commerce',
        description: 'Un portfolio personnel pour présenter mes projets.',
        technologies: 'PHP, CSS, JavaScript',
        image: 'commerce.jpg',
        lien: 'https://github.com/Serinedbh/e-commerce'
    },
    {
        nom: 'Générateur D\'accords',
        description: 'Un portfolio personnel pour présenter mes projets.',
        technologies: 'HTML, CSS, JavaScript',
        image: 'guitare.jpg',
        lien: 'https://serinedbh.github.io/chords-generator/'
    },
    {
        nom: 'Générateur MDP',
        description: 'Un portfolio personnel pour présenter mes projets.',
        technologies: 'HTML, CSS, JavaScript',
        image: 'MDP.jpg',
        lien: 'http://serinedbh.github.io/password-generator/'
    }
];

// Fonction pour afficher les projets
function afficherProjets() {
    const container = document.getElementById('projets-container');
    projets.forEach(projet => {
        const projetDiv = document.createElement('div');
        projetDiv.classList.add('projet');
        projetDiv.innerHTML = `
            <img src="images/${projet.image}" alt="${projet.nom}">
            <h3>${projet.nom}</h3>
            <p>${projet.description}</p>
            <p><strong>Technologies:</strong> ${projet.technologies}</p>
            <a href="${projet.lien}" target="_blank" class="button">Voir le projet</a>
        `;
        container.appendChild(projetDiv);
    });
}

// Appeler la fonction pour afficher les projets
afficherProjets();
