const data = {
    fields: {
        for: 'Pour :',
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
                    icon: 'graduation-cap',
                    text: 'Master MIAGE',
                    itemprop: 'award'
                }, {
                    icon: 'id-card-o',
                    text: 'Drivers license B',
                    itemprop: 'award'
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
                    root: 'div'
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
            }, {
                title: 'Website',
                subtitle: 'Where to find me?',
                class: 'only-print',
                template: {
                    name: 'description-template',
                    root: 'p'
                },
                data: [{
                    content: `More information on <strong>https://pandraghon.github.io/penguin/</strong>.`
                }, {
                    content: `<img src="./img/qr.png" style="display:block;max-width:65%;margin:auto;"/>`
                }]
            }, {
                title: 'Social',
                subtitle: 'Where to find me?',
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
                title: 'Presentation',
                subtitle: 'What about me?',
                template: {
                    name: 'description-template',
                    class: 'description-container',
                    root: 'p'
                },
                data: [{
                    content: `Curious and passionate, I regularly keep up to date with the latest trends in software and web programming through an active technology watch.`,
                }, {
                    content: `Rigorous, organized and conscientious, I adapt easily to new situations and to the requirements of working in a team or independently.`,
                }, {
                    content: `Serious and diligent, I make it a point of honor to produce quality work while constantly evolving..`,
                }]
            }, {
                title: 'Competences',
                subtitle: 'What can I do?',
                template: {
                    name: 'competence-group-template',
                    class: 'competences-container',
                    root: '.comp-group'
                },
                data: [{
                    header: 'Programmation',
                    comps: '<strong>Javascript</strong>, <strong>SQL</strong>, Python, C++, Qt, C, Java',
                    notions: 'C# (current training), Typescript, Android, MAUI'
                }, {
                    header: 'Web',
                    comps: '<strong>NodeJS</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, Sass, SCSS, less, Express, Socket.io, Vue, SEO, PHP, CakePHP, Symfony',
                    notions: 'Blazor (training), SyncFusion'
                }, {
                    header: 'CI/CD',
                    comps: '<strong>Git</strong>, <strong>Docker</strong>, <strong>Github Actions</strong>, Docker Swarn',
                    notions: 'AWS, Azure, Ansible, Jenkins, Kubernetes'
                }, {
                    header: 'Office Software',
                    comps: '<strong>Linux</strong>, <strong>Windows</strong>, <strong>Excel</strong>, <strong>LaTeX</strong>, Word, Powerpoint, Access, Office365, GSuite', 
                    notions: 'macOS'
                }, {
                    header: 'Languages',
                    comps: 'Français (mother tongue), Anglais (TOEIC)',
                    notions: 'Allemand, Japonais, Esperanto'
                }]
            }],
        }]
    }, {
        id: 'timeline',
        title: 'Timeline',
        tab: 'Timeline',
        columns: [{
            articles: [{
                title: 'Background',
                subtitle: 'Where do I come from?',
                template: {
                    name: 'timeline-template',
                    class: 'timeline-container',
                    root: '.timeline-block'
                },
                data: [{
                    id: 'syentys',
                    icon: 'briefcase',
                    icon_text: 'Job',
                    start: '2017',
                    end: '2025',
                    title: 'IT Engineer',
                    location: 'Syentys, Mulhouse',
                    description: `<ul>
                    <li>Odoo ERP integration for various customers, including dental equipment manufacturers, butchers, financial journalists, pizza vending machine manufacturers, etc.</li>
                    <li>Tasks as developer, project manager and solution architect.</li>
                    <li>Contribution to the improvement of development and deployment procedures.</li>

                    </ul>`,
                    technologies: `ERP, Python, JS, HTML, Java, Talend, CI/CD, Github, AWS, Azure`,
                }, {
                    id: 'syentys_internship',
                    icon: 'briefcase',
                    icon_text: 'Internship',
                    start: '02/2017',
                    end: '07/2017',
                    title: 'Stage de M2',
                    location: 'Syentys, Mulhouse',
                    description: `<ul>
                    <li>Development of modules for Odoo ERP integration at a dental products manufacturer.</li>
                    <li>Research into the feasibility of an on-board version of Odoo in artisan workshops or vehicles.</li>
                    </ul>`,
                    technologies: `ERP, Python, JS, HTML`,
                }, {
                    id: 'miage',
                    icon: 'graduation-cap',
                    icon_text: 'Education',
                    start: '2012',
                    end: '2017',
                    title: 'Master MIAGE',
                    location: 'UHA, Mulhouse',
                    description: '(Méthodes Informatiques Appliquées à la Gestion d\'Entreprise), Upper Second Class Honours.'
                }, {
                    id: 'meta4',
                    icon: 'briefcase',
                    icon_text: 'Internship',
                    start: '05/2015',
                    end: '09/2015',
                    title: 'L3 Internship',
                    location: 'META4, Mulhouse',
                    description: 'Development of an internal workflow-based package management and delivery tool.',
                    technologies: `Access, PHP, JS, HTML`,
                }, {
                    id: 'lla',
                    icon: 'graduation-cap',
                    icon_text: 'Education',
                    start: '2012',
                    title: 'French Scientific A-levels',
                    location: 'Lycée Louis Armand, Mulhouse',
                    description: 'Engineering Sciences option, specialising in Math, First Class Honours.'
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
                    for: 'Personnal project',
                    description: 'Image generator (GW2 success) based on user-selectable parameters',
                    technologies: ['NodeJS', 'Canvas'],
                    git: 'https://github.com/gw2ocs/gw2achievements',
                    url: 'https://gw2achievements.com'
                },
                {
                    id: 'gw2trivia',
                    name: 'GW2Trivia',
                    for: 'Personnal project',
                    description: 'Website for Questions pour un Quaggan, a general knowledge quiz on the GW2 universe',
                    technologies: ['NodeJS', 'PostgreSQL', 'plpgsql', 'Postgraphile', 'QraphQL', 'JS', 'SEO', 'HTML', 'CSS'],
                    git: 'https://github.com/gw2ocs/gw2trivia',
                    url: 'https://gw2trivia.com'
                },
                {
                    id: 'triagui',
                    name: 'TriaGUI',
                    for: 'M1 MIAGE project',
                    description: 'Tool for constructing and displaying Delaunay triangulation over several degrees.',
                    technologies: ['C++', 'Qt', 'interface', 'dessin', 'geométrie'],
                    git: 'https://github.com/Pandraghon/TriaGUI'
                },
                {
                    id: 'gw2icon',
                    name: 'GW2Icon',
                    for: 'Personnal project',
                    description: 'Plugin for including GW2 game icons in web pages, using pure CSS.',
                    technologies: ['CSS', 'Sass', 'NodeJS', 'HTML', 'gulp.js', 'TravisCI'],
                    git: 'https://github.com/gw2ocs/gw2icon',
                    url: 'http://gw2icon.com'
                },
                {
                    id: 'meta4',
                    name: 'SaaSTools',
                    for: 'L3 MIAGE Internship at META4',
                    description: 'Internal tool to manage package delivery via a workflow.',
                    technologies: ['Access', 'PHP', 'MySQL', 'JS', 'AJAX', 'HTML', 'CSS']
                },
                {
                    id: 'anoname',
                    name: 'Anoname',
                    for: 'Personnal project',
                    description: 'Name generator based on the Markov chain principle.',
                    technologies: ['C++', 'Qt'],
                    git: 'https://github.com/Pandraghon/anoname'
                }]
            }]
        }]
    }]
};

export { data };