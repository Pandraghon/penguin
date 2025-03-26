import paginator from './paginator.js';
import CVElement from './components.js';
import Page from './page.js';

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
