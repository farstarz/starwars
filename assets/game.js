$(document).ready(function(){
    // creating the character object
		var chooseHeroRole = "hero";
        
        class character {
        constructor(name, attackPower, imageL, imageR){
            this.name= name;
        // this.healthPoints = healthPoints;
            this.attackPower = attackPower;
            this.counterAttackPower = attackPower;
            this.attackNumber=0;
            this.role = "default";
            this.healthPoints = 1000;
            this.imageL = imageL;
            this.imageR = imageR;
        }
        // reduce the health point of enemy by attackPower and add base attack power to attackPower
        attack(enemy){
            enemy.healthPoints=enemy.healthPoints-hero.attackPower;
            hero.attackPower=hero.attackPower+hero.counterAttackPower;
            hero.attackNumber++;
            $("#fireRange").html("<img src=\"./assets/images/strike1.PNG\" alt=\"strike1\" id=\"weapon\">");
            // $("#weapon").css({});
            $("#fireRange").animate({left: "70px"}, 5000);
        }
        counterAttack(hero){
            hero.healthPoints-=enemy.counterAttackPower;
            
        }
        chooseRole(){
            if(chooseHeroRole==="hero"){
				this.role = "Hero";
                hero = this;
                $("#player1").append("<img src="+this.imageL+" alt=\"left image\" class=\"playerImage\"></img>");
                // console.log(this);
				// console.log(hero);
            }else{
				this.role = "enemy";
				enemy=this;
            	$("#player2").append("<img src="+this.imageR+ "alt=\"left image\" class=\"playerImage\"></img>");
				// console.log(this);
				// console.log(enemy);
            }
        }
        reset(){
            this.role="default";
            this.attackPower= this.counterAttackPower;
            this.attackNumber=0;
        }
    };
    
    let hero = new character;
	let enemy = new character;
    let obiWanKenobi = new character("Obi-Wan Kenobi", 120, "\"./assets/images/picL1.png\"", "\"./assets/images/picR1.png\"");
    let lukeSkywalker = new character("Luke Skywalker", 100, "\"./assets/images/picL1.png\"", "\"./assets/images/picR1.png\"");
    let darthStdious = new character("Darth Stdious", 150, "\"./assets/images/picL1.png\"", "\"./assets/images/picR1.png\"");
    let darthMaul = new character("Darth Maul", 180, "\"./assets/images/picL1.png\"", "\"./assets/images/picR1.png\"");
    // console.log(obiWanKenobi);
    // console.log(lukeSkywalker);
    // console.log(darthStdious);
		// console.log(darthMaul);
		$(".role").on("click", function(){chooseHeroRole=this.value;})
	
		$("#obk").on("click", function(){ obiWanKenobi.chooseRole();});
		$("#ls").on("click", function(){ lukeSkywalker.chooseRole();});
		$("#ds").on("click", function(){ darthStdious.chooseRole();});
		$("#dm").on("click", function(){ darthMaul.chooseRole();});

		$("#attack").on("click", function(){
			hero.attack(enemy);
			enemy.counterAttack(hero);
			console.log(hero);
			console.log(enemy);
		});
		
})