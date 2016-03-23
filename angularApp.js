(function(){
	var app = angular.module('worldFood', []);
	
	app.controller('FoodController' , function(){
		this.products = foods;
	});
	
	app.controller('TabController1', function(){
		this.tab1 = 1;
		this.setTab = function(num){
			this.tab1 = num;
		};
		this.isSet = function(num){
			return this.tab1 === num;
		};
	});
	
	app.controller('TabController2', function(){
		this.tab2 = 1;
		this.setTab = function(num){
			this.tab2 = num;
		};
		this.isSet = function(num){
			return this.tab2 === num;
		};
	});
	
	var foods = [
	{
		name: "Mexican food",
		options: [
		 {name: "mole", image:"mole.jpg"}, 
		 {name: "tacos",image:"tacos.jpg"}, 
		 {name: "esquites", image:"esquites.jpg"}, 
		 {name: "enchiladas", image:"enchiladas.jpg"}
		]
	},
	{
		name: "USA food",
		options: [
		 {name:"hamborger", image:"hamborger.jpg"}, 
		 {name:"hot dog", image:"hot dog.jpg"},
		 {name:"apple pie", image:"apple pie.jpg"}
		]
	},
	{
		name: "Italian food",
		options: [
		 {name:"pasta", image:"pasta.jpg"}, 
		 {name:"pizza", image:"pizza.jpg"},  
		 {name:"lasagna", image:"lasagna.jpg"}
		]
	},
	{
		name: "Tunosian food",
		options: [
		 {name:"kuskus", image:"kuskus.jpg"}, 
		 {name:"bulet", image:"bulet.jpg"},
		 {name:"frikase", image:"frikase.jpg"}
		]
	}
	]
})();