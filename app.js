new Vue({
	el: "#shoppingList",
	data: {
		state: "default",
		header: "Shopping List App",
		newItem: "",
		items: [
			{
				label: "10 party hats",
				purchased: false,
				highPriority: false,
			},
			{
				label: "2 board games",
				purchased: true,
				highPriority: false,
			},
			{
				label: "20 cups",
				purchased: false,
				highPriority: true,
			},
		],
	},

	computed: {
		reversedItems() {
			return this.items.slice(0).reverse();
		},
		// characterCount() {
		// 	return this.newItem.length;
		// },
	},

	methods: {
		saveItem: function () {
			this.items.push({
				label: this.newItem,
				purchased: false,
			});
			this.newItem = "";
		},
		changeState: function (newState) {
			this.state = newState;
			this.newItem = "";
		},
		togglePurchased: function (item) {
			item.purchased = !item.purchased;
		},
	},
});
