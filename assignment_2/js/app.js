(function() {
	'use strict';

	angular.module('ShoppingList', []) 
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListService', ShoppingListService);


	ToBuyController.$inject = ['ShoppingListService'];
	function ToBuyController (ShoppingListService) {
		var tobuy = this;

		tobuy.list = ShoppingListService.getToBuyList();

		tobuy.removeItem = function (itemIndex) {
			ShoppingListService.removeItem(itemIndex);
		};

	};


	AlreadyBoughtController.$inject = ['ShoppingListService'];
	function AlreadyBoughtController (ShoppingListService) {
		var alreadybought = this; 
		alreadybought.list = ShoppingListService.getAlreadyBoughtList();
	};
	

	function ShoppingListService () {
		var service = this;

		service.toBuyList = [{
			name: 'Cookies',
			quantity: 10 
		},
		{
			name: 'Strawberries',
			quantity: 7 
		},
		{
			name: 'Apples',
			quantity: 5 
		},
		{
			name: 'Chocolates',
			quantity: 15 
		},
		{
			name: 'Coke',
			quantity: 6
		}];

		service.alreadyBoughtList = [];


		service.getToBuyList = function () {
			return service.toBuyList;
		}

		service.getAlreadyBoughtList = function () {
			return service.alreadyBoughtList;
		}

		service.removeItem = function (itemIndex) {
			var item = service.toBuyList.splice(itemIndex, 1);
			service.alreadyBoughtList.push(item[0]);
		}

	};

})();