import CVElement from './components.js';

export default class Page {
	constructor(data, navigation) {
        const template = document.getElementById('page-template').content,
			node = document.importNode(template, true),
			el = node.querySelector('section');

        if (data.id) {
            el.id = data.id;
        }

        if (data.headline) {
            const headline = document.createElement('h2');
            headline.textContent = data.headline;
            el.append(headline);
        }

        if (!data.columns) return console.error(`Missing columns for ${data.id} page`);

        let parent = el;
        for (let i = 0, imax = data.columns.length ; i < imax ; i++) {
            const column = data.columns[i];
            if (imax !== 1) {
                parent = document.createElement('aside');
                parent.classList.add(`page-aside ${column.type || ''}`);
            }

            for (let j = 0, jmax = column.articles.length ; j < jmax ; j++) {
                parent.appendChild(this.renderArticle(column.articles[j]));
            }

            if (imax !== 1) {
                el.append(parent);
            }
        }

        el.append(this.renderPagination(data.id, navigation))

        return node;
    }

    renderArticle({ title, subtitle, data, ...options }) {
        const template = document.getElementById('article-template').content,
			node = document.importNode(template, true),
			el = node.querySelector('article');

            el.querySelector('.article-title').innerHTML = `${title} <small>${subtitle}</small>`;

            const data_len = data.length,
                data_container = document.querySelector('.article-content');
            for (let i = 0 ; i < data_len ; i++) {
                data_container.appendChild(new CVElement(options.template.name, options.template.root, data[i], options.template.sub));
            }

        return node;
    }

    renderPagination(id, navigation) {
        const template = document.getElementById('navigation-template').content,
			node = document.importNode(template, true),
			el = node.querySelector('nav');

        if (navigation.length <= 1) return;

        let previous = next = false;

        if (id === navigation[0].id) {
            next = navigation[1];
        } else if (id === navigation[navigation.length - 1].id) {
            previous = navigation[navigation.length - 2];
        } else {
            for (let i = 1, imax = navigation.length-1 ; i < imax ; i++) {
                if (id === navigation[i].id) {
                    previous = navigation[i - 1];
                    next = navigation[i + 1];
                    break;
                }
            }
        }

        if (previous) {
            Object.assign(el.querySelector('.previous-page'), {
                href: `#${previous.id}`,
                title: previous.title
            });
        }
        if (next) {
            Object.assign(el.querySelector('.next-page'), {
                href: `#${next.id}`,
                title: next.title
            });
        }

        return node;
    }

};