const data = {
	"mollekake": {
		position: [-2, 7],
		data: {
			faction: ["narrator"]
		},
	},
	"sporq": {
		position: [2, 7],
		data: {
			faction: ["narrator"]
		},
	},
	"yewho": {
		position: [-7, 5],
		data: {
			faction: ["narrator", "knight"]
		},
	},
	"manamerci": {
		position: [0, 6],
		data: {
			faction: ["narrator"]
		},
	},
	"ireland": {
		position: [0, 5],
		data: {
			faction: ["narrator"]
		},
	},
	"sin": {
		position: [-7, 4],
		data: {
			faction: ["narrator", "knight"]
		},
	},
	"ronylouis": {
		position: [1, 3],
		data: {
			faction: ["wildcard"]
		},
	},
	"ghostise": {
		position: [-6, 1],
		data: {
			faction: ["knight"]
		},
	},
	"nico": {
		position: [-8, 2],
		data: {
			faction: ["knight"]
		},
	},
	"satan": {
		position: [9, 1],
		data: {
			faction: ["swarm"]
		},
	},
	"coldflame": {
		position: [5, 0],
		data: {
			faction: ["wildcard"]
		},
	},
	"gryph": {
		position: [-7, 0],
		data: {
			faction: ["knight"]
		},
	},
	"stealth": {
		position: [0, 0],
		data: {
			faction: ["wildcard", "neutral"]
		},
	},
	"enda": {
		position: [-4, -1],
		data: {
			faction: ["wildcard"]
		},
	},
	"mypasswordis567890": {
		position: [8, -1],
		data: {
			faction: ["swarm"]
		},
	},
	"ladyvulcan": {
		position: [-7, -2],
		data: {
			faction: ["knight"]
		},
	},
	"aria": {
		position: [8, -2],
		data: {
			faction: ["swarm"]
		},
	},
	"alpha": {
		position: [6, -3],
		data: {
			faction: ["swarm"]
		},
	},
	"chris": {
		position: [9, -3],
		data: {
			faction: ["wildcard"]
		},
	},
	"melissa": {
		position: [-3, -5],
		data: {
			faction: ["snakeroom"]
		},
	},
	"irroc": {
		position: [9, -5],
		data: {
			faction: ["swarm"]
		},
	},
	"hitokage": {
		position: [0, -6],
		data: {
			faction: ["snakeroom"]
		},
	},
	"cosmo": {
		position: [1, -6],
		data: {
			faction: ["snakeroom"]
		},
	},
	"mega": {
		position: [5, -7],
		data: {
			faction: ["swarm", "snakeroom"]
		},
	},
	"coco": {
		position: [0, -8],
		data: {
			faction: ["snakeroom"]
		},
	},
	"dash": {
		position: [-4, -9],
		data: {
			faction: ["snakeroom"]
		},
	},
	"haykam": {
		position: [1, -9],
		data: {
			faction: ["snakeroom"]
		},
	},
};

module.exports = Object.entries(data).map(([key, value]) => {
	if (!value.data) {
		value.data = {};
	}

	if (!value.data.id) value.data.id = key;
	if (!value.data.name) {
		value.data.name = value.data.id[0].toUpperCase() + value.data.id.slice(1);
	}

	if (Array.isArray(value.position)) {
		value.position = {
			x: value.position[0],
			y: value.position[1],
		}
	}

	return value;
});