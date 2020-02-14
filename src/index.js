require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");

const cytoscape = require("cytoscape");
const data = require("./data.js");

const colors = {
	knight: "red",
	narrator: "yellow",
	neutral: "#eee",
	wildcard: "pink",
	swarm: "dodgerblue",
	snakeroom: "limegreen",
}

const scale = 50;

const cy = cytoscape({
	container: document.getElementById("compass"),
	elements: data,
	layout: {
		name: "preset",
		transform: (node, position) => {
			position.x = position.x * scale;
			position.y = position.y * -scale;
			return position;
		}
	},
	style: [{
		selector: "node",
		style: {
			label: "data(name)",
			backgroundColor: element => {
				return colors[element.data("faction")[0]];
			},
			"border-width": element => {
				const altFaction = element.data("faction")[1];
				return colors[altFaction] ? 5 : 1;
			},
			"border-color": element => {
				const altFaction = element.data("faction")[1];
				return colors[altFaction];
			}
		},
	}],
});
window.cy = cy;