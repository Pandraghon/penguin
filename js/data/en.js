const data = {
    fields: {
        for: 'For :',
        technologies: 'Technologies :',
        git: 'Sources :',
        url: 'Link :',
        menu: 'Back to menu',
        notions: 'Notions :',
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
                    text: '10/Jan/1994',
                    itemprop: 'age'
                }, {
                    icon: 'map-marker',
                    text: 'Mulhouse, France',
                    itemprop: 'address'
                }, {
                    icon: 'graduation-cap',
                    text: 'MIAGE Master',
                    itemprop: 'award'
                }, {
                    icon: 'id-card-o',
                    text: 'Driving license B',
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
                title: 'Hobbies',
                subtitle: 'What I like?',
                template: {
                    name: 'hobby-template',
                    class: 'hobbies-container',
                    root: 'div'
                },
                data: [{
                    name: 'Programming',
                    icon: 'code'
                },
                {
                    name: 'Games',
                    icon: 'gamepad'
                },
                {
                    name: 'Enigmas',
                    icon: 'puzzle-piece'
                },
                {
                    name: 'Reading',
                    icon: 'book'
                },
                {
                    name: 'Baking',
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
                    content: `Curious and passionate in development, I regularly keep up to date with the latest trends in software and web programming through an active technology watch.`,
                }, {
                    content: `Rigorous, organized and conscientious, I easily adapt to new situations and environments. Being customer oriented, I am able to transform client requirements into valuable deliverables.`,
                }, {
                    content: `Serious and diligent, I make it a point of honor to only produce quality work.`,
                }]
            }, {
                title: 'Skills & Competencies',
                subtitle: 'What can I do?',
                template: {
                    name: 'competence-group-template',
                    class: 'competences-container',
                    root: '.comp-group'
                },
                data: [{
                    header: 'Programming',
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
                    header: 'Office Software',
                    comps: '<strong>Linux</strong>, <strong>Windows</strong>, <strong>LaTeX</strong>, <strong>GSuite</strong>, <strong>Microsoft Office</strong>', 
                    notions: 'macOS'
                }, {
                    header: 'Languages',
                    comps: 'French: mother tongue<br/>English: fluent (reading, writing, speaking)<br/>Notions of German, Japanese and Esperanto',
                }]
            }],
        }]
    }, {
        id: 'timeline',
        title: 'Timeline',
        tab: 'Timeline',
        columns: [{
            articles: [{
                title: 'Experiences',
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
                    title: 'Software Development Engineer & Solution Architect',
                    location: 'Syentys, France',
                    description: `<ul>
                    <li>Odoo ERP integration and maintenance for various customers, including dental equipment manufacturers, butchers, financial journalists, pizza vending machine manufacturers, etc.</li>
                    <li>Customers' data migration from their previous system to Odoo ERP.</li>
                    <li>Odoo Connectors with other APIs such as Prestashop, etc.</li>
                    <li>Functional and technical customer training sessions: how to use standard and customized features of Odoo ERP, how to build and maintain simple modules using either code or Odoo Studio (graphical builder).</li>
                    <li>Project Manager: planning (Agile) / team management, test definition and monitoring (Installation Qualification, Operational Qualification, Performance Qualification) and direct interface with the customer.</li>
                    <li>Solution Architect: analyzing and challenging customer's requirements with the default features of the solution, translating business requirements into technical tasks for optimal implementation.</li>
                    <li>Technical Advisor: Odoo functional and technical expertise, Docker and Linux technical reference, organization of code reviews with the developers.</li>
                    <li>Improvement of development and deployment procedures: teaching developers to use debbuging tools, installation and deployment procedures on Linux hosts.</li>
                    <li>R&D for C#-based solution for building security system.</li>
                    </ul>`,
                    technologies: `ERP, Python, JS, HTML, Java, Talend, CI/CD, Github, AWS, Azure`,
                }, {
                    id: 'syentys_internship',
                    icon: 'briefcase',
                    icon_text: 'Internship',
                    start: '02/2017',
                    end: '07/2017',
                    title: 'Developer (Master Internship)',
                    location: 'Syentys, France',
                    description: `<ul>
                    <li>Feasibility study of an embeded hardware and software version of Odoo in craftmanship's factories and vehicles.</li>
                    <li>Development of Odoo modules for a project with a dental products manufacturer.</li>
                    </ul>`,
                    technologies: `ERP, Python, JS, HTML`,
                }, {
                    id: 'miage',
                    icon: 'graduation-cap',
                    icon_text: 'Education',
                    start: '2012',
                    end: '2017',
                    title: 'MIAGE Master',
                    location: 'UHA Mulhouse, France',
                    description: 'Computer Methods Applied to Business Management, valedictorian, diploma recieved with honours.'
                }, {
                    id: 'meta4',
                    icon: 'briefcase',
                    icon_text: 'Internship',
                    start: '05/2015',
                    end: '09/2015',
                    title: 'Developer (Bachelor Internship)',
                    location: 'META4, France',
                    description: 'Development of an internal workflow-based package management and delivery tool.',
                    technologies: `Access, PHP, JS, HTML`,
                }, {
                    id: 'lla',
                    icon: 'graduation-cap',
                    icon_text: 'Education',
                    start: '2012',
                    title: 'French Scientific A-level',
                    location: 'Lycée Louis Armand, France',
                    description: 'Engineering Sciences option, specialised in mathematics, valedictorian, diploma recieved with honours.'
                }]
            }]
        }]
    }, {
        id: 'portfolio',
        title: 'Project Portfolio (1/2)',
        tab: 'Portfolio',
        columns: [{
            articles: [{
                title: 'Project Portfolio (1/2)',
                subtitle: 'What have I done?',
                template: {
                    name: 'portfolio-template',
                    class: 'portfolio-container',
                    root: '.project'
                },
                data: [{
                    id: 'gw2achievements',
                    name: 'GW2Achievements',
                    for: 'Personal project',
                    description: 'Image generator (GW2 achievements) based on user-selectable parameters',
                    technologies: ['NodeJS', 'Canvas', 'Docker'],
                    git: 'https://github.com/gw2ocs/gw2achievements',
                    url: 'https://gw2achievements.com'
                },
                {
                    id: 'gw2trivia',
                    name: 'GW2Trivia',
                    for: 'Personal project',
                    description: 'Website for "Questions pour un Quaggan", a general knowledge quiz on the GW2 universe',
                    technologies: ['NodeJS', 'PostgreSQL', 'plpgsql', 'Postgraphile', 'QraphQL', 'JS', 'API', 'SEO', 'HTML', 'CSS', 'Docker'],
                    git: 'https://github.com/gw2ocs/gw2trivia',
                    url: 'https://gw2trivia.com'
                },
                {
                    id: 'ogden',
                    name: 'Ogden',
                    for: 'Personal project',
                    description: 'Discord Bot for "Questions pour un Quaggan": chatbot in a GW2 community Discord server, asking question every hour.',
                    technologies: ['NodeJS', 'PostgreSQL', 'QraphQL', 'JS', 'API', 'Discord', 'Docker'],
                    git: 'https://github.com/gw2ocs/ogden'
                },
                {
                    id: 'triagui',
                    name: 'TriaGUI',
                    for: 'MIAGE Master project',
                    description: 'Tool for building and displaying Delaunay triangulation.',
                    technologies: ['C++', 'Qt', 'interface', 'drawing', 'geometry'],
                    git: 'https://github.com/Pandraghon/TriaGUI'
                },
                {
                    id: 'gw2icon',
                    name: 'GW2Icon',
                    for: 'Personal project',
                    description: 'Plugin for including GW2 game icons in web pages, using pure CSS.',
                    technologies: ['CSS', 'Sass', 'NodeJS', 'HTML', 'gulp.js', 'TravisCI'],
                    git: 'https://github.com/gw2ocs/gw2icon',
                    url: 'http://gw2icon.com'
                },
                {
                    id: 'meta4',
                    name: 'SaaSTools',
                    for: 'MIAGE Bachelor Internship at META4',
                    description: 'Internal tool to manage package delivery via a workflow.',
                    technologies: ['Access', 'PHP', 'MySQL', 'JS', 'AJAX', 'HTML', 'CSS']
                },
                {
                    id: 'anoname',
                    name: 'Anoname',
                    for: 'Personal project',
                    description: 'Name generator based on the Markov chain principle.',
                    technologies: ['C++', 'Qt'],
                    git: 'https://github.com/Pandraghon/anoname'
                }]
            }]
        }]
    }, {
        id: 'portfolio2',
        title: 'Project Portfolio (2/2)',
        columns: [{
            articles: [{
                title: 'Project Portfolio (2/2)',
                subtitle: 'What have I done?',
                template: {
                    name: 'portfolio-template',
                    class: 'portfolio-container',
                    root: '.project'
                },
                data: [{
                    id: 'pageotron',
                    name: 'Page-o-tron',
                    for: 'Personnal project',
                    description: 'Pages generator for the french MediaWiki of GW2, using data from the game\'s API.',
                    technologies: ['NodeJS', 'MediaWiki', 'API'],
                    git: 'https://github.com/Pandraghon/page-o-tron',
                    url: 'https://pandraghon.github.io/page-o-tron/'
                }, {
                    id: 'amongus',
                    name: 'BetterSabotage & UnknownImpostor',
                    for: 'Personnal projects',
                    description: 'Code development (mods) for the game AmongUs, injecting additional features.',
                    technologies: ['C#', 'Modding'],
                    git: 'https://github.com/Pandraghon/BetterSabotage',
                }]
            }]
        }]
    }]
};

export { data };