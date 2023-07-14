let Recipes = [];
let filteredRecipes = [];
let lastUsedFilter;

class Recipe {
	constructor(name, cookTime, freshIngredients, otherIngredients, vegetarian, anleitung) {
		this._name = name;
		this._cookTime = cookTime;
		this._freshIngredients = freshIngredients;
		this._otherIngredients = otherIngredients;
		this._vegetarian = vegetarian;
		this._anleitung = anleitung;
		Recipes.push(this);
	}


get name () {
	return this._name;
}

get cookTime () {
	return this._cookTime;
}

get freshIngredients () {
	return this._freshIngredients;
}

get otherIngredients () {
	return this._otherIngredients;
}

get vegetarian () {
	return this._vegetarian;
}

get anleitung () {
	return this._anleitung;
}
}


const KaSpiEi = new Recipe ("Kartoffelpüree mit Spinat und Ei", 30, ["Kartoffeln", "Spinat", "Ei"], ["Salz", "Pfeffer"], "Ja", 'Na wie soll das schon funktionieren. Du nimmst <br><br/> halt die <span class="fat">Zutaten </span> und haust sie in die Pfanne und Töpfe');
const WokNudeln = new Recipe ("Wok Nudeln", 25, ["Brokkoli", "Möhren", "Nudeln"], ["Salz", "Pfeffer"], "Nein", "So geht das");
const ChickenNuggetsPenne = new Recipe ("Chicken Nuggets mit Curry-Lauch-Penne", 30, ["Hähnchen", " Lauch", " Frühlingszwiebel", " Sahne", " Parmesan"],["Penne", " Panko-Paniermehl", " Gemüsebrühe", " Butter", " Öl", " Salz", " Pfeffer", " Curry"], "Nein", 'Nudelwasser aufsetzen, <span class="fat">Nudeln</span> laut Packungsangaben garen. Danach durch ein Sieb geben und etwas Nudelwasser für die Sauce beiseitestellen. <br/><br/> Währenddessen das <span class="fat">Hähnchen</span> schneiden und mit <span class="fat">Senf</span>, etwas <span class="fat">Sahne</span>, <span class="fat">Salz</span> und <span class="fat">Pfeffer</span> vermengen. Anschließend im <span class="fat">Paniermehl</span> wenden. Fritteuse vorheizen. <br/><br/> <span class="fat">Lauch</span> halbieren und in Streifen schneiden. <span class="fat">Frühlingszwiebeln</span> in Ringe schneiden. Beides in <span class="fat">Butter</span> anschwitzen. Mit <span class="fat">Nudelwasser</span>, <span class="fat">Gemüsebrühe</span> und <span class="fat">Currypulver</span> ablöschen und ein paar Minuten einkochen lassen.<br/><br/> Restliche <span class="fat">Sahne</span> hinzufügen und weiter einköcheln lassen. Geriebenen <span class="fat">Parmesan</span> einrühren und mit <span class="fat">Salz</span> und <span class="fat">Pfeffer</span> abschmecken. <span class="fat">Penne</span> unterrühren.<br/><br/> <span class="fat">Nuggets</span> in der Fritteuse garen.<br/><br/> Anrichten.'); 


let element = document.getElementById("GenerateButton");
element.onclick = function zufallsGericht() { 
			filter();
			if(filteredRecipes.length == 0) {
				document.getElementById("Gericht").innerHTML = "Leider konnte kein Gericht gefunden werden. Bitte andere Filter verwenden!";
				document.getElementById("cookTime").innerHTML = "";
				document.getElementById("freshIngredients").innerHTML = "";
				document.getElementById("otherIngredients").innerHTML = "";
				document.getElementById("Vegetarian").innerHTML = "";
				document.getElementById("GerichtBild").hidden = "hidden";
				document.getElementById("anleitung").innerHTML = "";
				return;
			}
			let chosen = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
			document.getElementById("Gericht").innerHTML = "Gericht: " + chosen.name;
			document.getElementById("cookTime").innerHTML = "Kochzeit: " + chosen.cookTime + "min";
			document.getElementById("freshIngredients").innerHTML = "Frische Zutaten: " + chosen.freshIngredients;
			document.getElementById("otherIngredients").innerHTML = "Andere Zutaten: " + chosen.otherIngredients;
			document.getElementById("Vegetarian").innerHTML = "Vegetarisch: " + chosen.vegetarian;
			document.getElementById("GerichtBild").src = `Resources/Images/${chosen.name}.jpg`;
			document.getElementById("GerichtBild").hidden = "";
			document.getElementById("anleitung").innerHTML = "Anleitung: " + chosen.anleitung;
}

function filter() {

	var cookTimeInput = document.getElementById("chooseCookingTimes").value;
	var vegetarianInput = document.getElementById("chooseVegetarian").value;
	
	if(lastUsedFilter != `${cookTimeInput} + ${vegetarianInput}`) {
		filteredRecipes = [];

		if(cookTimeInput == "egal") {
			filteredRecipes = Recipes;
		}
		else {
			filteredRecipes = Recipes.filter(recipe => recipe.cookTime <= cookTimeInput);
		}
		if(vegetarianInput != "egal") {
			filteredRecipes = filteredRecipes.filter(recipe => recipe.vegetarian == vegetarianInput);
		}
	}
	
	lastUsedFilter = `${cookTimeInput} + ${vegetarianInput}`;
}

