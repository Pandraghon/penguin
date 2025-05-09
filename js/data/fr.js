const data = {
    fields: {
        for: 'Pour :',
        technologies: 'Technologies :',
        git: 'Sources :',
        url: 'Lien :',
        menu: 'Retour au menu',
        notions: 'Notions :',
    },
    pages: [{
        id: 'personal_information',
        title: 'Informations personnelles',
        tab: 'Moi',
        headline: 'Sylvain Albasser',
        columns: [{
            type: 'aside-small',
            articles: [{
                title: 'Identité',
                subtitle: 'Qui suis-je ?',
                template: {
                    name: 'info-template',
                    class: 'info-container',
                    root: '.info-group'
                },
                data: [{
                    icon: 'user',
                    text: 'Sylvain Albasser',
                    itemprop: 'name'
                }, {
                    icon: 'birthday-cake',
                    text: '10/Jan/1994',
                    itemprop: 'age'
                }, {
                    icon: 'map-marker',
                    text: 'Mulhouse, Alsace',
                    itemprop: 'address'
                }, {
                    icon: 'graduation-cap',
                    text: 'Master MIAGE',
                    itemprop: 'award'
                }, {
                    icon: 'id-card-o',
                    text: 'Permis B',
                    itemprop: 'award'
                }, {
                    icon: 'at',
                    text: 'salbasser[at]gmail.com',
                    itemprop: 'email'
                }, {
                    icon: 'phone',
                    text: '+33  6 67 12 53 50',
                    itemprop: 'phone',
                    class: 'only-print'
                }]
            }, {
                title: 'Centres d\'intérêt',
                subtitle: 'Ce que j\'aime ?',
                template: {
                    name: 'hobby-template',
                    class: 'hobbies-container',
                    root: 'div'
                },
                data: [{
                    name: 'Programmation',
                    icon: 'code'
                },
                {
                    name: 'Jeux',
                    icon: 'gamepad'
                },
                {
                    name: 'Enigmes',
                    icon: 'puzzle-piece'
                },
                {
                    name: 'Lecture',
                    icon: 'book'
                },
                {
                    name: 'Pâtisserie',
                    icon: 'birthday-cake'
                }]
            }, {
                title: 'Site web',
                subtitle: 'Où me trouver ?',
                class: 'only-print',
                template: {
                    name: 'description-template',
                    root: 'p'
                },
                data: [{
                    content: `Vous trouverez plus de détails en allant sur <strong>https://pandraghon.github.io/penguin/</strong>.`
                }, {
                    content: `<img src="./img/qr.png" style="display:block;max-width:65%;margin:auto;"/>`
                }]
            }, {
                title: 'Social',
                subtitle: 'Où me trouver ?',
                class: 'no-print',
                template: {
                    name: 'social-template',
                    root: 'div'
                },
                data: [{
                    link: 'https://github.com/Pandraghon',
                    img: './img/social/github.png',
                    title: 'Github'
                }, {
                    link: 'https://www.linkedin.com/in/sylvain-albasser-97b104133/',
                    img: './img/social/linkedin.png',
                    title: 'LinkedIn'
                }, {
                    link: 'https://www.codingame.com/profile/c400d304a25e14274cffded6005bb602690359',
                    img: './img/social/codingame.png',
                    title: 'Codingame'
                }]
            }]
        }, {
            type: 'aside-main',
            articles: [{
                title: 'Présentation',
                subtitle: 'À propos de moi ?',
                template: {
                    name: 'description-template',
                    class: 'description-container',
                    root: 'p'
                },
                data: [{
                    content: `Curieux et passionné, je me tiens régulièrement informé des dernières tendances en programmation logicielle et web grâce à une veille technologique active.`,
                }, {
                    content: `Rigoureux, organisé et consciencieux, je m’adapte facilement aux nouvelles situations et environnements. Orienté client, je suis capable de transformer les exigences des clients en livrables de qualité.`,
                }, {
                    content: `Sérieux et appliqué, je mets un point d'honneur à seulement produire un travail de qualité.`,
                }]
            }, {
                title: 'Compétences',
                subtitle: 'Que suis-je capable de faire ?',
                template: {
                    name: 'competence-group-template',
                    class: 'competences-container',
                    root: '.comp-group'
                },
                data: [{
                    header: 'Programmation',
                    comps: '<strong>Javascript</strong>, <strong>SQL</strong>, Python, C++, Qt, C, Java',
                    notions: 'C#, Typescript, Android, MAUI'
                }, {
                    header: 'Web',
                    comps: '<strong>NodeJS</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, Sass, SCSS, less, Express, Socket.io, Vue, SEO, PHP, CakePHP, Symfony',
                    notions: 'Blazor, SyncFusion'
                }, {
                    header: 'CI/CD',
                    comps: '<strong>Git</strong>, <strong>Docker</strong>, <strong>Github Actions</strong>, Docker Swarn',
                    notions: 'AWS, Azure, Ansible, Jenkins, Kubernetes'
                }, {
                    header: 'Bureautique',
                    comps: '<strong>Linux</strong>, <strong>Windows</strong>, <strong>LaTeX</strong>, <strong>GSuite</strong>, <strong>Microsoft Office</strong>', 
                    notions: 'macOS'
                }, {
                    header: 'Langues',
                    comps: 'Français : langue maternelle<br/>Anglais : TOEIC<br/>Notions d\'allemand, de japonais et d\'esperanto'
                }]
            }],
        }]
    }, {
        id: 'timeline',
        title: 'Chronologie',
        tab: 'Chronologie',
        columns: [{
            articles: [{
                title: 'Formation et expériences',
                subtitle: 'D\'où je viens ?',
                template: {
                    name: 'timeline-template',
                    class: 'timeline-container',
                    root: '.timeline-block'
                },
                data: [{
                    id: 'syentys',
                    icon: 'briefcase',
                    icon_text: 'Emploi',
                    start: '2017',
                    end: '2025',
                    title: 'Ingénieur informatique',
                    location: 'Syentys, Mulhouse',
                    description: `<ul>
                    <li>Intégration de l'ERP Odoo pour différents clients, allant du fabricant de matériels dentaires au boucher-charcutier, en passant par du journalisme financier, du fabricant de distributeurs de pizza, ...</li>
                    <li>Migration de données des clients depuis leur système précédent vers l'ERP Odoo.</li>
                    <li>Connecteurs Odoo vers d'autres API comme Prestashop, ...</li>
                    <li>Séances de formation fonctionnelle et technique avec les clients.</li>
                    <li>Chef de projet : planification (Agile) / gestion d'équipe, définition et suivi des tests (Installation Qualification, Operational Qualification, Performance Qualification) et interface directe avec le client.</li>
                    <li>Architecte solution : analyse et challenge des exigences du client par rapport aux fonctionnalités par défaut de la solution, traduction des exigences métier en tâches techniques pour une implémentation optimale.</li>
                    <li>Référent technique : expertise fonctionnelle et technique d'Odoo, référent technique pour Linux et Docker, organisation de revues de code avec les développeurs.</li>
                    <li>Amélioration des procédures de développement et de déploiement : formation des développeurs à l'utilisation des outils de débogage, procédures d'installation et de déploiement sur les hôtes Linux.</li>
                    <li>R&D pour une solution basée en C# pour les systèmes de sécurité des bâtiments.</li>
                    </ul>`,
                    technologies: `ERP, Python, JS, HTML, Java, Talend, CI/CD, Github, AWS, Azure`,
                }, {
                    id: 'syentys_internship',
                    icon: 'briefcase',
                    icon_text: 'Stage',
                    start: '02/2017',
                    end: '07/2017',
                    title: 'Développeur (Stage de M2)',
                    location: 'Syentys, Mulhouse',
                    description: `<ul>
                    <li>Développement de modules pour l'intégration de l'ERP Odoo chez un fabricant de produits dentaires.</li>
                    <li>Recherche sur la faisabilité d'une version embarquée d'Odoo dans des ateliers ou des véhicules d'artisans.</li>
                    </ul>`,
                    technologies: `ERP, Python, JS, HTML`,
                }, {
                    id: 'miage',
                    icon: 'graduation-cap',
                    icon_text: 'Formation',
                    start: '2012',
                    end: '2017',
                    title: 'Master MIAGE',
                    location: 'UHA, Mulhouse',
                    description: '(Méthodes Informatiques Appliquées à la Gestion d\'Entreprise), mention Bien.'
                }, {
                    id: 'meta4',
                    icon: 'briefcase',
                    icon_text: 'Stage',
                    start: '05/2015',
                    end: '09/2015',
                    title: 'Développeur (Stage de L3)',
                    location: 'META4, Mulhouse',
                    description: 'Développement d\'un outil en interne de gestion et delivraison de packages à travers un workflow.',
                    technologies: `Access, PHP, JS, HTML`,
                }, {
                    id: 'lla',
                    icon: 'graduation-cap',
                    icon_text: 'Formation',
                    start: '2012',
                    title: 'Baccalauréat Scientifique',
                    location: 'Lycée Louis Armand, Mulhouse',
                    description: 'Option Sciences de l\'Ingénieur, spécialité Maths, mention Très Bien'
                }]
            }]
        }]
    }, {
        id: 'portfolio',
        title: 'Portfolio',
        tab: 'Portfolio',
        columns: [{
            articles: [{
                title: 'Portfolio',
                subtitle: 'Ce que j\'ai fait ?',
                template: {
                    name: 'portfolio-template',
                    class: 'portfolio-container',
                    root: '.project'
                },
                data: [{
                    id: 'gw2achievements',
                    name: 'GW2Achievements',
                    for: 'Projet personnel',
                    description: 'Générateur d\'images (succès GW2) en fonction de paramètres sélectionnable par l\'utilisateur',
                    technologies: ['NodeJS', 'Canvas', 'Docker'],
                    git: 'https://github.com/gw2ocs/gw2achievements',
                    url: 'https://gw2achievements.com'
                },
                {
                    id: 'gw2trivia',
                    name: 'GW2Trivia',
                    for: 'Projet personnel',
                    description: 'Site web du jeu Questions pour un Quaggan, un quiz de culture générale sur l\'univers de GW2',
                    technologies: ['NodeJS', 'PostgreSQL', 'plpgsql', 'Postgraphile', 'QraphQL', 'JS', 'API', 'SEO', 'HTML', 'CSS', 'Docker'],
                    git: 'https://github.com/gw2ocs/gw2trivia',
                    url: 'https://gw2trivia.com'
                },
                {
                    id: 'ogden',
                    name: 'Ogden',
                    for: 'Projet personnel',
                    description: 'Bot Discord du jeu Questions pour un Quaggan',
                    technologies: ['NodeJS', 'PostgreSQL', 'QraphQL', 'JS', 'API', 'Discord', 'Docker'],
                    git: 'https://github.com/gw2ocs/ogden'
                },
                {
                    id: 'triagui',
                    name: 'TriaGUI',
                    for: 'Projet M1 MIAGE',
                    description: 'Outil de construction et de visualisation de triangulation de Delaunay sur plusieurs degrés.',
                    technologies: ['C++', 'Qt', 'interface', 'dessin', 'geométrie'],
                    git: 'https://github.com/Pandraghon/TriaGUI'
                },
                {
                    id: 'gw2icon',
                    name: 'GW2Icon',
                    for: 'Projet personnel',
                    description: 'Plugin pour inclure des icônes du jeu GW2 dans des pages Web en CSS pur.',
                    technologies: ['CSS', 'Sass', 'NodeJS', 'HTML', 'gulp.js', 'TravisCI'],
                    git: 'https://github.com/gw2ocs/gw2icon',
                    url: 'http://gw2icon.com'
                },
                {
                    id: 'meta4',
                    name: 'SaaSTools',
                    for: 'Stage L3 MIAGE chez META4',
                    description: 'Outil en interne gérant la livraison de package à travers un workflow.',
                    technologies: ['Access', 'PHP', 'MySQL', 'JS', 'AJAX', 'HTML', 'CSS']
                },
                {
                    id: 'anoname',
                    name: 'Anoname',
                    for: 'Projet personnel',
                    description: 'Générateur de noms en se basant sur le principe de la chaîne de Markov.',
                    technologies: ['C++', 'Qt'],
                    git: 'https://github.com/Pandraghon/anoname'
                }]
            }]
        }]
    }, {
        id: 'portfolio2',
        title: 'Portfolio (suite)',
        columns: [{
            articles: [{
                title: 'Portfolio (suite)',
                subtitle: 'Ce que j\'ai fait ?',
                template: {
                    name: 'portfolio-template',
                    class: 'portfolio-container',
                    root: '.project'
                },
                data: [{
                    id: 'pageotron',
                    name: 'Page-o-tron',
                    for: 'Projet personnel',
                    description: 'Générateur de pages pour le MediaWiki de GW2 en tirant les données de l\'API du jeu.',
                    technologies: ['NodeJS', 'MediaWiki', 'API'],
                    git: 'https://github.com/Pandraghon/page-o-tron',
                    url: 'https://pandraghon.github.io/page-o-tron/'
                }, {
                    id: 'amongus',
                    name: 'BetterSabotage & UnknownImpostor',
                    for: 'Projets personnels',
                    description: 'Mods du jeu AmongUs pour injecter des fonctionnalités supplémentaires',
                    technologies: ['C#', 'Modding'],
                    git: 'https://github.com/Pandraghon/BetterSabotage',
                }]
            }]
        }]
    }]
};

export { data };