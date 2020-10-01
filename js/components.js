export default class CVElement {
	constructor(template_name, root_el, data, sub_element) {
		const template = document.getElementById(template_name).content,
			node = document.importNode(template, true),
			el = node.querySelector(root_el);
		
		el.outerHTML = el.outerHTML
			.replace(/{{ if data.(.*?) }}(.*?){{ endif }}/g, (_, p1, p2) => data.hasOwnProperty(p1) ? p2 : '')
			.replace(/{{ data.(.*?) }}/g, (_, p1) => data[p1]);

		if (sub_element) {
			const sub_len = data[sub_element['key']].length,
				sub_container = sub_element['container'] && node.querySelector(sub_element['container']) || node,
				sub_template = document.getElementById(sub_element['template_name']).content;
			
			for (let i = 0 ; i < sub_len ; i++) {
				const sub_node = document.importNode(sub_template, true),
					sub_el = sub_node.querySelector(sub_element['root_el']);
				
				sub_el.outerHTML = sub_el.outerHTML.replace(/{{ data.(.*?) }}/g, (_, p1) => data[sub_element['key']][i][p1]);
				sub_container.append(sub_node);
			}
		}

		return node;
	}
}
