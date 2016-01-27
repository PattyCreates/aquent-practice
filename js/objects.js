// Created multiple objects under one array 

var items =[
	{
		name: "hammer",
		cost: 12.00,
		id: 101,
		picture: "hammer.jpg",
	},
	{
		name: "nails",
		cost: 10.00,
		id: 102,
		picture: "nails.jpg"
	},
	{
		name: "gum",
		cost: 1.00,
		id: 103,
		picture: "gum.jpg"
	}
];

function listItems() {
	for(var i = 0; i < items.length; i++) {
		console.log(items[i].name + " is $" + items[i].cost);
	}
}

listItems();