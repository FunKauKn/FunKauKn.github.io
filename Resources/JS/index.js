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
const HähnchenFlorentinerArt = new Recipe ("Hähnchen Floretiner Art mit Zucchini und Kartoffelecken", 35, ["Hähnchen", " Zucchini", " Kartoffeln", " Babyspinat", " Petersilie", " Oregano", " Sahne", " Zwiebel", " Zitrone", " Knoblauch"], ["Paprikapulver", " Hühnerbrühe", " Öl", " Salz", " Pfeffer"], "Nein", 'Backofen auf 200° Ober- und Unterhitze vorheizen.<br/><br/><span class="fat">Kartoffeln</span> waschen und in Spalten schneiden. In eine Schüssel geben und mit <span class="fat">Öl</span>, <span class="fat">Paprikapulver</span>, <span class="fat">Salz</span>, <span class="fat">Pfeffer</span> und etwas <span class="fat">Zucker</span> vermengen. Auf eine Backblech im Ofen 25-30 min. garen.<br/><br/><span class="fat">Hähnchen</span> in einer Pfanne mit <span class="fat">Öl</span> anbraten und mit <span class="fat">Salz</span> und <span class="fat">Pfeffer</span> würzen. Anschließend das <span class="fat">Hähnchen</span> in eine kleine Auflaufform geben und 10 min. im Ofen weitergaren. <br/><br/><span class="fat">Zucchini</span> in dünne Scheiben schneiden und anbraten. <br/><br/><span class="fat">Zwiebel</span> und <span class="fat">Knoblauch</span> fein hacken, <span class="fat">Kräuter</span> hacken. <br/><br/>In der Pfanne <span class="fat"> Zwiebeln</span>, <span class="fat">Knoblauch</span> und <span class="fat">Oregano</span> anschwitzen mit <span class="fat">Hühnerbrühe</span> und <span class="fat">Sahne</span> ablöschen und einkochen lassen.<br/><br/><span class="fat">Spinat</span> unterrühren und mit <span class="fat">Zitronensaft</span>, <span class="fat">Salz</span> und <span class="fat">Pfeffer</span> abschmecken.<br/><br/><span class="fat">Kartoffeln</span> und <span class="fat">Zucchini</span> auf dem Teller anrichten und die <span class="fat">Sauce</span> auf das <span class="fat">Huhn</span> geben, mit Petersilie garniert servieren.'); 
const Quesadillas = new Recipe ("Quesadillas mit Käse-Hack-Füllung und Tomatensalsa", 25, ["Wraps", " Hackfleisch", " Tomaten", " Zwiebel", " geriebener Gouda", " Koriander", " Petersilie", " Zitronensaft", " Joghurt"], ["Tomatenmark", " Salz", " Pfeffer", " Paprikapulver", " Zucker", " Öl"], "Nein", '<span class="fat">Zwiebel</span> klein würfeln. <span class="fat">Tomaten</span> in 1 cm große Würfel schneiden. <span class="fat">Kräuter</span> fein hacken.<br/><br/><span class="fat">Tomaten, Kräuter</span> und die Hälfte der <span class="fat">Zwiebeln</span> mit <span class="fat">Salz, Pfeffer, Zucker, Zitronensaft</span> und <span class="fat">Öl</span> zu einer Salsa vermengen.<br/><br/>In einer Pfanne <span class="fat">Öl</span> erhitzen, <span class="fat">Hackfleisch</span> zusammen mit den restlichen <span class="fat">Zwiebelwürfeln</span> anbraten. <span class="fat">Tomatenmark</span> hinzufügen, mit <span class="fat">Salz, Pfeffer</span> und <span class="fat">Paprikapulver</span> abschmecken. Aus der Pfanne nehmen und beiseite stellen.<br/><br/><span class="fat">Tortillafladen</span> in die heiße Pfanne geben, eine hälfte mit <span class="fat">Käse</span> bestreuen und einen Teil der <span class="fat">Hackfleischmasse</span> darauf geben. Die leere Hälfte des <span class="fat">Tortillafladens</span> darüber klappen und nach ein paar Minuten umdrehen. <span class="fat">Quesadilla</span> auch von der anderen Seite bräunen und aus der Pfanne nehmen.<br/><br/><span class="fat">Salsa</span> auf die <span class="fat">Quesadilla</span> geben und mit <span class="fat">Joghurt</span> toppen.'); 
const Köfte = new Recipe ("Rinderfrikadellen mit Rosinen-Reis und Tomatensalat", 35, ["Rinderhackfleisch", " Tomaten", " Knoblauch", " Zwiebel", " Rosinen", " Petersilie", " Schnittlauch", " Joghurt"], ["Senf", " Panko-Paniermehl", " Salz", " Pfeffer", " Paprikapulver", " Zucker", " Öl", " Knoblauchpulver", " Chili"], "Nein", '<span class="fat">Zwiebel</span> und <span class="fat">Knoblauch</span> fein hacken. In einem Topf <span class="fat">Zwiebelwürfel</span> und die Hälfte vom <span class="fat">Knoblauch</span> in <span class="fat">Öl</span> anbraten, <span class="fat">Reis, Rosinen</span> und <span class="fat">Paprikapulver</span> hinzufügen. <span class="fat">Wasser</span> (doppelt so viel wie Reis) hinzufügen und 10 min. abgedeckt köcheln lassen. Topf vom Herd nehmen und 10 min. ziehen lassen.<br/><br/> <span class="fat">Kräuter</span> getrennt voneinander fein hacken. <span class="fat">Tomaten</span> in Spalten schneiden.<br/><br/>Restlichen <span class="fat">Knoblauch</span> und <span class="fat">Schnittlauch</span> in eine große Schüssel geben, <span class="fat">Hackfleisch, Senf, Paniermehl</span>, etwas <span class="fat">Joghurt, Salz, Pfeffer, Paprikapulver, Chili</span> hinzufügen und vermengen. Aus der Masse Frikadellen formen.<br/><br/> In einer Pfanne in <span class="fat">Öl</span> die <span class="fat">Frikadellen</span> anbraten. <br/><br/> <span class="fat">Tomatenspalten</span> mit <span class="fat">Schnittlauch, Salz</span> und <span class="fat">Pfeffer</span> vermischen. <span class="fat">Joghurt, Petersilie, Salz, Pfeffer</span> und <span class="fat">Zucker</span> vermischen.<br/><br/><span class="fat">Reis</span> auf einem Teller anrichten, <span class="fat">Tomatensalat, Frikadellen</span> und <span class="fat">Joghurt</span> hinzufügen und servieren.');  
const SloppyJoe = new Recipe ("Burger mit Hackfleischsauce und Möhrensalat, dazu Kartoffeln", 30, ["Rinderhackfleisch", " Burgerbuns", " Zwiebel", " Möhren", " Frühlinngszwiebel", " Joghurt", "Kartoffeln"], ["Worchestersauce", " Tomatenmark", " Salz", " Pfeffer", " Öl", " Zucker", " Essig"], "Nein", 'Backofen auf 220° Ober- und Unterhitze vorheizen. <br/><br/><span class="fat">Kartoffeln</span> in Scheiben schneiden und auf ein Backblech legen, mit <span class="fat">Öl</span> beträufeln und mit <span class="fat">Salz</span> und <span class="fat">Pfeffer</span> würzen. Für 25 min. in den Ofen geben.');


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

