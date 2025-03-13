const data = {
    fields: {
        for: 'For :',
        technologies: 'Technologies :',
        git: 'Sources :',
        url: 'Link :',
        menu: 'Back to menu',
    },
    pages: [{
        id: 'personal_information',
        title: 'Personnal information',
        tab: 'Me',
        headline: 'Sylvain Albasser',
        columns: [{
            type: 'aside-small',
            articles: [{
                title: 'Identity',
                subtitle: 'Who am I?',
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
                title: 'Hobbies',
                subtitle: 'What I like?',
                template: {
                    name: 'hobby-template',
                    class: 'hobbies-container',
                    root: 'i'
                },
                data: [{
                    name: 'Programmation',
                    icon: 'code'
                },
                {
                    name: 'Games',
                    icon: 'gamepad'
                },
                {
                    name: 'Enigma',
                    icon: 'puzzle-piece'
                },
                {
                    name: 'Reading',
                    icon: 'book'
                },
                {
                    name: 'Pastry-making',
                    icon: 'birthday-cake'
                }]
            }]
        }, {
            type: 'aside-main',
            articles: [{
                title: 'Presentation',
                subtitle: 'What about me?',
                template: {
                    name: 'description-template',
                    class: 'description-container',
                    root: 'p'
                },
                data: [{
                    content: `Curieux et passionné, j'aime me tenir au courant des dernières tendances dans le domaine de la programmation logiciel et web (pratique d'une veille technologique assidue).`,
                }, {
                    content: `Sérieux, autodidacte et appliqué, je peux travailler seul (autonomie) ou en groupe (au sein d'une équipe).`,
                }, {
                    content: `Rigueur, organisation, adaptabilité, consciencieux`,
                }]
            }, {
                title: 'Competences',
                subtitle: 'What am I able to do?',
                template: {
                    name: 'competence-group-template',
                    class: 'competences-container',
                    root: '.comp-group'
                },
                data: [{
                    header: 'Programmation',
                    comps: '<strong>Javascript</strong>, <strong>SQL</strong>, Python, C++, C, Java',
                    notions: 'C# (formation en cours), Typescript'
                }, {
                    header: 'Web',
                    comps: '<strong>NodeJS</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, Sass, SCSS, less, Express, Socket.io, Vue, SEO, PHP, CakePHP, Symfony',
                    notions: 'Blazor (formation), SyncFusion'
                }, {
                    header: 'CI/CD',
                    comps: '<strong>Docker</strong>, <strong>Github Actions</strong>, Docker Swarn',
                    notions: 'Ansible, Jenkins, Kubernetes'
                }, {
                    header: 'Office Software',
                    comps: 'Excel, Word, Powerpoint, LaTeX, Access', 
                }, {
                    header: 'Languages',
                    comps: 'Anglais',
                    notions: 'Allemand, Japonais, Esperanto'
                }]
            }, {
                title: 'Website',
                subtitle: 'Where to find me?',
                class: 'only-print',
                template: {
                    name: 'description-template',
                    root: 'p'
                },
                data: [{
                    content: `You can find out more by visiting <strong>https://pandraghon.github.io/penguin/</strong>.`
                }]
            }],
        }]
    }, {
        id: 'timeline',
        title: 'Timeline',
        tab: 'Timeline',
        columns: [{
            articles: [{
                title: 'Timeline',
                subtitle: 'Where do I come from?',
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
                    end: 'Maintenant',
                    title: 'Ingénieur informatique',
                    location: 'Syentys, Mulhouse',
                    description: 'Intégration de l\'ERP Odoo pour différents clients, allant du fabricant de matériels dentaires au boucher-charcutier, en passant par du jouranlisme financier, du fabricant de distributeurs de pizza, ...',
                    technologies: ['ERP', 'Python', 'JS', 'HTML', 'Java', 'Talend', 'CI/CD', 'Github', 'AWS', 'Azure', ]
                }, {
                    id: 'syentys_internship',
                    icon: 'briefcase',
                    icon_text: 'Stage',
                    start: '02/2017',
                    end: '07/2017',
                    title: 'Stage de M2',
                    location: 'Syentys, Mulhouse',
                    description: 'Développement de modules pour l\'intégration de l\'ERP Odoo chez un fabricant de produits dentaires. Recherche sur une version embarquée d\'Odoo.',
                    technologies: ['ERP', 'Python', 'JS', 'HTML']
                }, {
                    id: 'miage',
                    icon: 'graduation-cap',
                    icon_text: 'Formation',
                    start: '2012',
                    end: '2017',
                    title: 'Master MIAGE',
                    location: 'UHA, Mulhouse',
                    description: '(Méthodes Informatiques Appliquées à la Gestion d\'Entreprise)'
                }, {
                    id: 'meta4',
                    icon: 'briefcase',
                    icon_text: 'Stage',
                    start: '05/2015',
                    end: '09/2015',
                    title: 'Stage de L3',
                    location: 'META4, Mulhouse',
                    description: 'Développement d\'un outil en interne gérant la livraison de package à travers un workflow.',
                    technologies: ['Access', 'PHP', 'JS', 'HTML']
                }, {
                    id: 'lla',
                    icon: 'graduation-cap',
                    icon_text: 'Formation',
                    start: '2012',
                    title: 'Baccalauréat Scientifique',
                    location: 'Lycée Louis Armand, Mulhouse',
                    description: 'opt. Sciences de l\'Ingénieur, spé. Maths, mention Très Bien'
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
                subtitle: 'What have I done?',
                template: {
                    name: 'portfolio-template',
                    class: 'portfolio-container',
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
                    technologies: ['NodeJS', 'PostgreSQL', 'plpgsql', 'Postgraphile', 'QraphQL', 'JS', 'SEO', 'HTML', 'CSS'],
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
                title: 'Tools',
                subtitle: 'What do I use?',
                template: {
                    name: 'tool-template',
                    class: 'tool-container',
                    root: '.tool'
                },
                data: [{
                    
                }]
            }]
        }]
    }]
};

export { data };