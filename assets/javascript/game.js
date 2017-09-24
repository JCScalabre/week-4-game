// Global Variables: hp / attack power / enemy hp / counter attack power.

//Link's Stats:
var hp = 200;
var ap = 25;
var ehp = 120;
var cap = 20;

var info = ""

// Displaying the variables into the HTML.
$("#hp").text(hp);
$("#ap").text(ap);
$("#ehp").text(ehp)
$("#cap").text(cap)
$("#info").text(info)

console.log("Your HP is: " + hp);
console.log("Your AP is: " + ap);

// When the attack button is pressed:
$("#attack").on("click", function() {
	hp = hp-cap;
	ehp = ehp-ap;
	$("#hp").text(hp);
	$("#ehp").text(ehp)
	$("#info").text("You hit your target for " + ap + "HP.");
	console.log("You attacked");
	console.log("Your HP is now: " + hp);
	if (hp === 0) {
		$("#info").text("Your HP reached 0 and you died!");
		console.log("You died.")
	}
	if (ehp <= 0) {
		$("#char2enemy").css("opacity", "0.3");
		ehp = 200;
		$("#info").text("You killed your target! Pick a new one.");
		console.log("You killed your target.")
	}
});

// When char 1 is chosen:
$("#char1").on("click", function() {
	console.log("You chose Link.");
	$("#yourhp").css("visibility", "visible");
	$("#yourap").css("visibility", "visible");
	$("#char1").prependTo("#chosenchar");
	$("#char2").prependTo("#enemies");
	$("#char3").prependTo("#enemies");
	$("#char4").prependTo("#enemies");
	$("#char1").css("border", "solid 3px green");
	$("#char2").css("border", "solid 3px red");
	$("#char3").css("border", "solid 3px red");
	$("#char4").css("border", "solid 3px red");
	$("#char1").attr("id", "char1chosen");
	$("#char2").attr("id","char2enemy");
	$("#char3").attr("id","char3enemy");
	$("#char4").attr("id","char4enemy");

	// When char 2 is chosen as an enemy:
	$("#char2enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Peach.");
		$("#char2enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})

	// When char 3 is chosen as an enemy:
	$("#char3enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Yoshi.");
		$("#char3enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})

	// When char 4 is chosen as an enemy:
	$("#char4enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Bowser.");
		$("#char4enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})
});

// When char 2 is chosen:
$("#char2").on("click", function() {
	console.log("You chose Peach.");
	$("#yourhp").css("visibility", "visible");
	$("#yourap").css("visibility", "visible");
	$("#char2").prependTo("#chosenchar");
	$("#char1").prependTo("#enemies");
	$("#char3").prependTo("#enemies");
	$("#char4").prependTo("#enemies");
	$("#char2").css("border", "solid 3px green");
	$("#char1").css("border", "solid 3px red");
	$("#char3").css("border", "solid 3px red");
	$("#char4").css("border", "solid 3px red");
	$("#char2").attr("id", "char2chosen");
	$("#char1").attr("id","char1enemy");
	$("#char3").attr("id","char3enemy");
	$("#char4").attr("id","char4enemy");

	$("#char1enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Link.");
		$("#char1enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})

	$("#char3enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Yoshi.");
		$("#char3enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})

	$("#char4enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Bowser.");
		$("#char4enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})
});

$("#char3").on("click", function() {
	console.log("You chose Yoshi.");
	$("#yourhp").css("visibility", "visible");
	$("#yourap").css("visibility", "visible");
	$("#char3").prependTo("#chosenchar");
	$("#char1").prependTo("#enemies");
	$("#char2").prependTo("#enemies");
	$("#char4").prependTo("#enemies");
	$("#char3").css("border", "solid 3px green");
	$("#char1").css("border", "solid 3px red");
	$("#char2").css("border", "solid 3px red");
	$("#char4").css("border", "solid 3px red");
	$("#char3").attr("id", "char3chosen");
	$("#char1").attr("id","char1enemy");
	$("#char2").attr("id","char2enemy");
	$("#char4").attr("id","char4enemy");

	$("#char1enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Link.");
		$("#char1enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})

	$("#char2enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Peach.");
		$("#char2enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})

	$("#char4enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Bowser.");
		$("#char4enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})
});

$("#char4").on("click", function() {
	console.log("You chose Bowser.");
	$("#yourhp").css("visibility", "visible");
	$("#yourap").css("visibility", "visible");
	$("#char4").prependTo("#chosenchar");
	$("#char1").prependTo("#enemies");
	$("#char2").prependTo("#enemies");
	$("#char3").prependTo("#enemies");
	$("#char4").css("border", "solid 3px green");
	$("#char1").css("border", "solid 3px red");
	$("#char2").css("border", "solid 3px red");
	$("#char3").css("border", "solid 3px red");
	$("#char4").attr("id", "char4chosen");
	$("#char1").attr("id","char1enemy");
	$("#char2").attr("id","char2enemy");
	$("#char3").attr("id","char3enemy");

	$("#char1enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Link.");
		$("#char1enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})

	$("#char2enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Peach.");
		$("#char2enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})

	$("#char3enemy").on("click", function() {
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Yoshi.");
		$("#char3enemy").prependTo("#defender");
		$("#fight").css("visibility", "visible");
	})
});