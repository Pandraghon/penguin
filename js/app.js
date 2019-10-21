import ui from './ui.js';
import CVElement from './components.js';
import { badges, infos, hobbies, competences, timeline, portfolio, social } from './data/info.js';

const init = () => {
	const badge_len = badges.length,
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
	social_container.append(...social_fragment.childNodes);

	ui();
};

init();