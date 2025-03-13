import paginator from './paginator.js';
import CVElement from './components.js';
import Page from './page.js';
import { badges, infos, hobbies, competences, timeline, portfolio, social } from './data/info.js';

const render = ({ data }) => {
	const pages_len = data.pages.length,
		tabs_container = document.querySelector('nav.folder'),
		pages_container = document.querySelector('main'),
		pages_fragment = document.createDocumentFragment(),
		tabs_fragment = document.createDocumentFragment(),
		pages_navigation = data.pages.map(({ id, title, tab }) => ({ id, title, tab }));
	
	for (let i = 0 ; i < pages_len ; i++) {
		// Generate menu navigation
		tabs_fragment.appendChild(new CVElement('tab-template', 'a', pages_navigation[i]));

		// Generate main content
		pages_fragment.appendChild(new Page(data.pages[i], pages_navigation));
	}
	tabs_container.querySelectorAll('a.page').forEach(a => a.remove());
	tabs_container.append(tabs_fragment);
	pages_container.innerHTML = '';
	pages_container.append(pages_fragment);

	/*const badge_len = badges.length,
		badge_container = document.querySelector('.badges-container'),
		badge_fragment = document.createDocumentFragment();
	for (let i = 0 ; i < badge_len ; i++) {
		badge_fragment.appendChild(new CVElement('badge-template', '.badge', badges[i]));
	}
	badge_container.append(...badge_fragment.childNodes);

	const info_len = infos.length,
		info_container = document.querySelector('.info-container'),
		info_fragment = document.createDocumentFragment();
	for (let i = 0 ; i < info_len ; i++) {
		info_fragment.appendChild(new CVElement('info-template', '.info-group', infos[i]));
	}
	info_container.append(...info_fragment.childNodes);
	
	const hobby_len = hobbies.length,
		hobby_container = document.querySelector('.hobbies-container'),
		hobby_fragment = document.createDocumentFragment();
	for (let i = 0 ; i < hobby_len ; i++) {
		hobby_fragment.appendChild(new CVElement('hobby-template', 'i', hobbies[i]));
	}
	hobby_container.append(...hobby_fragment.childNodes);
	
	const timeline_len = timeline.length,
		timeline_container = document.querySelector('.timeline-container'),
		timeline_fragment = document.createDocumentFragment();
	for (let i = 0 ; i < timeline_len ; i++) {
		timeline_fragment.appendChild(new CVElement('timeline-template', '.timeline-block', timeline[i]));
	}
	timeline_container.append(...timeline_fragment.childNodes);
	
	const competence_len = competences.length,
		competence_container = document.querySelector('.competences-container'),
		competence_fragment = document.createDocumentFragment();
	for (let i = 0 ; i < competence_len ; i++) {
		competence_fragment.appendChild(new CVElement('competence-group-template', '.comp-group', competences[i], {
			key: 'comps',
			container: false,
			template_name: 'competence-template',
			root_el: '.comp'
		}));
	}
	competence_container.append(...competence_fragment.childNodes);
	
	const portfolio_len = portfolio.length,
		portfolio_container = document.querySelector('.portfolio-container'),
		portfolio_fragment = document.createDocumentFragment();
	for (let i = 0 ; i < portfolio_len ; i++) {
		portfolio_fragment.appendChild(new CVElement('portfolio-template', '.project', portfolio[i]));
	}
	portfolio_container.append(...portfolio_fragment.childNodes);
	
	const social_len = social.length,
		social_container = document.querySelector('.social-container'),
		social_fragment = document.createDocumentFragment();
	for (let i = 0 ; i < social_len ; i++) {
		social_fragment.appendChild(new CVElement('social-template', '.social-logo', social[i]));
	}
	social_container.append(...social_fragment.childNodes);*/

	paginator();
};

import(`./data/fr.js`).then(render).catch(console.error);

document.querySelectorAll('.other-lang').forEach(nav => nav.addEventListener('click', (el) => {
	const lang = nav.dataset.lang;
	document.querySelector('.other-lang.current').classList.remove('current');
	nav.classList.add('current');
	document.querySelector('nav.folder .folder-label').innerHTML = nav.querySelector('.folder-label').innerHTML;
	import(`./data/${lang}.js`).then(render).catch(console.error);
}));
