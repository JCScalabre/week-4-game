// Global Variables: hp / attack power / enemy hp / counter attack power.

var attackpower;
var baseattackpower;

var linkstats = { "hp": 130, "ap": 7, "cap": 10 }
var peachstats = { "hp": 100, "ap": 8, "cap": 12 }
var yoshistats = { "hp": 80, "ap": 9, "cap": 14 }
var bowserstats = { "hp": 150, "ap": 10, "cap": 13 }

var info = "Welcome Super Smash Bros jQuery! Choose a character to begin."

var lockstate = false;

// Displaying the variables into the HTML.
// $("#hp").text(hp);
// $("#ap").text(ap);
// $("#ehp").text(ehp)
// $("#cap").text(cap)
$("#info").text(info)

// When char 1 is chosen:
$("#char1").on("click", function() {
	if (lockstate === false) {
		console.log("You chose Link.");
		$("#hp").text(linkstats.hp);
		$("#ap").text(linkstats.ap);
		attackpower = linkstats.ap;
		baseattackpower = attackpower;
		console.log("Link's AP: " + attackpower);
		$("#info").text("You chose Link! Now pick the enemy you would like to target.");
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
		lockstate = true;
		console.log(lockstate);
	}

	// When char 2 is chosen as an enemy:
	$("#char2enemy").on("click", function() {
		$("#ehp").text(peachstats.hp);
		$("#cap").text(peachstats.cap);
		$("#info").text("You chose the target Peach. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Peach.");
		$("#char2enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})

	// When char 3 is chosen as an enemy:
	$("#char3enemy").on("click", function() {
		$("#ehp").text(yoshistats.hp);
		$("#cap").text(yoshistats.cap);
		$("#info").text("You chose the target Yoshi. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Yoshi.");
		$("#char3enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})

	// When char 4 is chosen as an enemy:
	$("#char4enemy").on("click", function() {
		$("#ehp").text(bowserstats.hp);
		$("#cap").text(bowserstats.cap);
		$("#info").text("You chose the target Bowser. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Bowser.");
		$("#char4enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})
});

// When char 2 is chosen:

$("#char2").on("click", function() {
	if (lockstate === false) {
		console.log("You chose Peach.");
		console.log(lockstate);
		$("#hp").text(peachstats.hp);
		$("#ap").text(peachstats.ap);
		attackpower = peachstats.ap;
		baseattackpower = attackpower;
		console.log("Peach's AP: " + attackpower);
		$("#info").text("You chose Peach! Now pick the enemy you would like to target.");
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
		lockstate = true;
		console.log(lockstate);
	}

	$("#char1enemy").on("click", function() {
		$("#ehp").text(linkstats.hp);
		$("#cap").text(linkstats.cap);
		$("#info").text("You chose the target Link. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Link.");
		$("#char1enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})

	$("#char3enemy").on("click", function() {
		$("#ehp").text(yoshistats.hp);
		$("#cap").text(yoshistats.cap);		$("#enemyhp").css("visibility", "visible");
		$("#info").text("You chose the target Yoshi. Press the Attack button to attck your target.");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Yoshi.");
		$("#char3enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})

	$("#char4enemy").on("click", function() {
		$("#ehp").text(bowserstats.hp);
		$("#cap").text(bowserstats.cap);
		$("#info").text("You chose the target Bowser. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Bowser.");
		$("#char4enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})
});

$("#char3").on("click", function() {
	if (lockstate === false) {
		console.log("You chose Yoshi.");
		$("#hp").text(yoshistats.hp);
		$("#ap").text(yoshistats.ap);	
		attackpower = yoshistats.ap;
		baseattackpower = attackpower;
		console.log("Yoshi's AP: " + attackpower);
		$("#info").text("You chose Yoshi! Now pick the enemy you would like to target.");
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
		lockstate = true;
		console.log(lockstate);
	}

	$("#char1enemy").on("click", function() {
		$("#ehp").text(linkstats.hp);
		$("#cap").text(linkstats.cap);
		$("#info").text("You chose the target Link. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Link.");
		$("#char1enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})

	$("#char2enemy").on("click", function() {
		$("#ehp").text(peachstats.hp);
		$("#cap").text(peachstats.cap);
		$("#info").text("You chose the target Peach. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Peach.");
		$("#char2enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})

	$("#char4enemy").on("click", function() {
		$("#ehp").text(bowserstats.hp);
		$("#cap").text(bowserstats.cap);
		$("#info").text("You chose the target Bowser. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Bowser.");
		$("#char4enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})
});

$("#char4").on("click", function() {
	if (lockstate === false) {
		console.log("You chose Bowser.");
		$("#hp").text(bowserstats.hp);
		$("#ap").text(bowserstats.ap);
		attackpower = bowserstats.ap;
		baseattackpower = attackpower;
		console.log("Bowser's AP: " + attackpower);
		$("#info").text("You chose Bowser! Now pick the enemy you would like to target.");
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
		lockstate = true;
		console.log(lockstate);
	}

	$("#char1enemy").on("click", function() {
		$("#ehp").text(linkstats.hp);
		$("#cap").text(linkstats.cap);
		$("#info").text("You chose the target Link. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Link.");
		$("#char1enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})

	$("#char2enemy").on("click", function() {
		$("#ehp").text(peachstats.hp);
		$("#cap").text(peachstats.cap);
		$("#info").text("You chose the target Peach. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Peach.");
		$("#char2enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})

	$("#char3enemy").on("click", function() {
		$("#ehp").text(yoshistats.hp);
		$("#cap").text(yoshistats.cap);		
		$("#info").text("You chose the target Yoshi. Press the Attack button to attck your target.");
		$("#enemyhp").css("visibility", "visible");
		$("#yourcapower").css("visibility", "visible");
		console.log("You chose the enemy Yoshi.");
		$("#char3enemy").prependTo("#defender");
		$("#attack").css("visibility", "visible");
	})
});

// When the attack button is pressed:
$("#attack").on("click", function() {
	
	var targetcap = document.getElementById("cap").innerHTML;

	$("#info").html("You hit your target for " + attackpower + " damage. <br><br> Your target hit you for " + targetcap + " damage.")

	// Code that reduces your HP:
	var chosenhp = document.getElementById("hp").innerHTML;
	// console.log("Your HP: " + chosenhp);
	// console.log("Target's CAP: " + targetcap);
	chosenhp = chosenhp - targetcap;
	console.log("Your HP after being attacked: " + chosenhp);
	$("#hp").text(chosenhp); 

	// Code that reduces enemy HP:
	var enemyhp = document.getElementById("ehp").innerHTML;
	enemyhp = enemyhp - attackpower;
	$("#ehp").text(enemyhp);
	console.log("Enemy HP: " + enemyhp);

	attackpower = attackpower + baseattackpower;
	console.log("Attack Power: " + attackpower);

	$("#ap").html(attackpower);

	// Win / Loss conditions:
	if (chosenhp <= 0) {
		$("#info").html("GAME OVER! <br> Your HP reached 0 and you died!");
		console.log("You died.")
		$("#attack").css("display", "none");
		$("#reset").css("display", "inline");
	}
	if (enemyhp <= 0) {
		// $("#char2enemy").css("opacity", "0.3");
		$("#info").html("You killed your target! <br> Pick a new one. <br> If all enemies are dead, congratulations, you have won!");
		console.log("You killed your target.");
		$("#attack").css("visibility", "hidden");
		// $("#playagain").css("display", "inline");
	}
});

function refresh() {
	location.reload();
}

$("#reset").on("click", refresh);
$("#playagain").on("click", refresh);