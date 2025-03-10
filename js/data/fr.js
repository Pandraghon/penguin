const data = {
    fields: {
        for: 'Pour :',
        technologies: 'Technologies :',
        git: 'Sources :',
        url: 'Lien :',
        menu: 'Retour au menu',
    },
    pages: [{
        id: 'personal_information',
        title: 'Informations personnelles',
        headline: 'Sylvain Albasser',
        columns: [{
            type: 'aside-small',
            articles: [{
                title: 'Identité',
                subtitle: 'Qui suis-je ?',
                template: {
                    name: 'info-template',
                    root: '.info-group'
                },
                data: [{
                    icon: 'user',
                    text: 'Sylvain Albasser',
                    itemprop: 'name'
                }, {
                    icon: 'birthday-cake',
                    text: 31, //DateTime::createFromFormat('d/m/Y', '10/01/1994', new DateTimeZone('Europe/Paris'))->diff(new DateTime('now', new DateTimeZone('Europe/Paris')))->y . ' ans',
                    itemprop: 'age'
                }, {
                    icon: 'map-marker',
                    text: 'Mulhouse, Alsace',
                    itemprop: 'address'
                }, {
                    icon: 'at',
                    text: 'salbasser[at]gmail.com',
                    itemprop: 'email'
                }]
            }, {
                title: 'Centres d\'intérêt',
                subtitle: 'Ce que j\'aime ?',
                template: {
                    name: 'hobby-template',
                    root: 'i'
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
                title: 'Chronologie',
                subtitle: 'D\'où je viens ?',
                template: {
                    name: 'timeline-template',
                    root: '.timeline-block'
                },
                data: [{
                    id: 'miage',
                    icon: 'graduation-cap',
                    icon_text: 'Formation',
                    start: '2012',
                    end: 'Maintenant',
                    title: 'Master MIAGE',
                    location: 'UHA, Mulhouse',
                    description: '(Méthodes Informatiques Appliquées à la Gestion d\'Entreprise)'
                },
                {
                    id: 'meta4',
                    icon: 'briefcase',
                    icon_text: 'Stage',
                    start: '05/2015',
                    end: '09/2015',
                    title: 'Stage de L3',
                    location: 'META4, Mulhouse',
                    description: 'Développement d\'un outil en interne gérant la livraison de package à travers un workflow.',
                    technologies: ['Access', 'PHP', 'JS', 'HTML']
                },
                {
                    id: 'lla',
                    icon: 'graduation-cap',
                    icon_text: 'Formation',
                    start: '2012',
                    title: 'Baccalauréat Scientifique',
                    location: 'Lycée Louis Armand, Mulhouse',
                    description: 'opt. Sciences de l\'Ingénieur, spé. Maths, mention Très Bien'
                }]
            }, {
                title: '',
                subtitle: '',
                template: {
                    name: '',
                    root: ''
                },
                data: [{
                    
                }]
            }]
        }, {
            type: 'aside-main',
            articles: [{
                title: 'Présentation',
                subtitle: 'À propos de moi ?',
                template: {
                    name: 'description-template',
                    root: 'p'
                },
                data: [{
                    content: `Curieux et passionné, j'aime me tenir au courant des dernières tendances dans le domaine de la programmation logiciel et web.`,
                }, {
                    content: `Sérieux, autodidacte et appliqué, je peux travailler seul ou en groupe.`,
                }]
            }, {
                title: 'Compétences',
                subtitle: 'Que suis-je capable de faire ?',
                template: {
                    name: 'competence-group-template',
                    root: '.comp-group',
                    sub: {
                        key: 'comps',
                        container: false,
                        template_name: 'competence-template',
                        root_el: '.comp'
                    }
                },
                data: [{
                    header: 'Programmation',
                    comps: [
                        {
                            id: 'cpp',
                            name: 'C++',
                            value: 8.5
                        },
                        {
                            id: 'java',
                            name: 'Java',
                            value: 8
                        },
                        {
                            id: 'sql',
                            name: 'SQL',
                            value: 7
                        },
                        {
                            id: 'python',
                            name: 'Python',
                            value: 7
                        },
                        {
                            id: 'c',
                            name: 'C',
                            value: 5.5
                        }
                    ]
                },
                {
                    header: 'Web',
                    comps: [
                        {
                            id: 'html5',
                            name: 'HTML5',
                            value: 9
                        },
                        {
                            id: 'js',
                            name: 'JS',
                            value: 9
                        },
                        {
                            id: 'css3',
                            name: 'CSS3',
                            value: 8.8
                        },
                        {
                            id: 'php',
                            name: 'PHP',
                            value: 8
                        },
                        {
                            id: 'seo',
                            name: 'SEO',
                            value: 7
                        },
                        {
                            id: 'jee',
                            name: 'JEE',
                            value: 4.5
                        }
                    ]
                },
                {
                    header: 'Bureautique',
                    comps: [
                        {
                            id: 'powerpoint',
                            name: 'Powerpoint',
                            value: 9
                        },
                        {
                            id: 'word',
                            name: 'Word',
                            value: 9
                        },
                        {
                            id: 'excel',
                            name: 'Excel',
                            value: 7.5
                        },
                        {
                            id: 'latex',
                            name: 'LaTeX',
                            value: 5.5
                        },
                        {
                            id: 'access',
                            name: 'Access',
                            value: 3.5
                        }
                    ]
                },
                {
                    header: 'Langues',
                    comps: [
                        {
                            id: 'english',
                            name: '<img src="/img/flags/United-Kingdom.png" alt="Anglais" />',
                            value: 7.5
                        },
                        {
                            id: 'deutsch',
                            name: '<img src="/img/flags/Germany.png" alt="Allemand" />',
                            value: 4
                        }
                    ]
                }]
            }, {
                title: 'Site web',
                subtitle: 'Où me trouver ?',
                template: {
                    name: 'description-template',
                    root: 'p'
                },
                data: [{
                    content: `Vous trouverez plus de détails en allant sur <strong>https://pandraghon.github.io/penguin/</strong>.`
                }]
            }],
        }]
    }, {
        id: 'portfolio',
        title: 'Portfolio',
        columns: [{
            articles: [{
                title: 'Portfolio',
                subtitle: 'Ce que j\'ai fait ?',
                template: {
                    name: 'portfolio-template',
                    root: '.project'
                },
                data: [{
                    id: 'gw2achievements',
                    name: 'GW2Achievements',
                    for: 'Projet personnel',
                    description: 'Générateur d\'images (succès GW2) en fonction de plusieurs paramètres',
                    technologies: ['NodeJS', 'Canvas'],
                    git: 'https://github.com/gw2ocs/gw2achievements',
                    url: 'https://gw2achievements.com'
                },
                {
                    id: 'gw2trivia',
                    name: 'GW2Trivia',
                    for: 'Projet personnel',
                    description: 'Site web du jeu Questions pour un Quaggan, un quiz de culture générale sur l\'univers de GW2',
                    technologies: ['NodeJS', 'PostgreSQL', 'Postgraphile', 'QraphQL', 'JS', 'SEO', 'HTML', 'CSS'],
                    git: 'https://github.com/gw2ocs/gw2trivia',
                    url: 'https://gw2trivia.com'
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
                    for: 'Stage M2 MIAGE chez META4',
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
            }, {
                title: 'Outils',
                subtitle: 'Ce que j\'utilise ?',
                template: {
                    name: 'tool-template',
                    root: '.tool'
                },
                data: [{
                    
                }]
            }]
        }]
    }]
};

export { data };