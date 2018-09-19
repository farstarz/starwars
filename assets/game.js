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
            var rate = 300;
            var i = 0;
            var firing1 = setInterval(function(){$("#fireRange1").html("<img src=\"./assets/images/strike1.PNG\" alt=\"strike1\" class=\"weapon\">");

            // i++; console.log(i);
            var firing2 = setTimeout(function(){$("#fireRange1").html("<img src=\"./assets/images/strike2.PNG\" alt=\"strike2\" class=\"weapon\">");

              i++; console.log(i*100);},rate);
            },rate*2);

            var firing3 = setInterval(function(){$("#fireRange2").html("<img src=\"./assets/images/strike1R.PNG\" alt=\"strike1R\" class=\"weapon\">");

            // i++; console.log(i);
            var firing4 = setTimeout(function(){$("#fireRange2").html("<img src=\"./assets/images/strike2R.PNG\" alt=\"strike2R\" class=\"weapon\">");

            i++; console.log(i*100);},rate);
            },rate*2);
            // function fire(){
            //   $("#fireRange").html("<h2>"+i+"</h2>");
            //   i++;
            //   console.log(i);
              // $("#fireRange").html("<img src=\"./assets/images/strike1.PNG\" alt=\"strike1\" id=\"weapon\">");
              // $("#fireRange").delay(2000).empty();
              // $("#fireRange").html("<img src=\"./assets/images/strike2.PNG\" alt=\"strike2\" id=\"weapon\">").delay(time);
              // $("#fireRange").html("<img src=\"./assets/images/strike2.PNG\" alt=\"strike2\" id=\"weapon\">");
              // $("#fireRange").delay(2*time).empty();
                 
            
            setTimeout(function(){clearInterval(firing1);clearTimeout(firing2);clearInterval(firing3);clearTimeout(firing4);}, 5000);
            
            // $("#weapon").css({});
            // $("#fireRange").animate({left: "70px"}, 5000);
          }
            
        counterAttack(hero){
            hero.healthPoints-=enemy.counterAttackPower;
            
        }
        chooseRole(){
            if(chooseHeroRole==="hero"){
				this.role = "Hero";
                hero = this;
                
                $("#player1").empty().append("<img src="+this.imageL+" alt=\"left image\" class=\"playerImage\"></img>");
                // console.log(this);
				// console.log(hero);
            }else{
				this.role = "enemy";
				enemy=this;
            	$("#player2").empty().append("<img src="+this.imageR+ "alt=\"left image\" class=\"playerImage\"></img>");
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
    let harry = new character("Harry Potter", 120, "\"./assets/images/picL1.png\"", "\"./assets/images/picR1.png\"");
    let hermionie = new character("Hermionie Granger", 100, "\"./assets/images/hermionieL.png\"", "\"./assets/images/hermionieR.png\"");
    let luna = new character("Luna Lovegood", 150, "\"./assets/images/LunaL.png\"", "\"./assets/images/LunaR.png\"");
    let gilderoy = new character("Gilderoy Lockhart", 180, "\"./assets/images/gilderockL.png\"", "\"./assets/images/gilderockR.png\"");
    let snape = new character("Severus Snape", 180, "\"./assets/images/snapeL.png\"", "\"./assets/images/snapeR.png\"");
    // console.log(harry);
    // console.log(hermionie);
    // console.log(luna);
		// console.log(gilderoy);
		$(".role").on("click", function(){chooseHeroRole=this.value;})
	
		$("#hp").on("click", function(){ harry.chooseRole();});
		$("#hg").on("click", function(){ hermionie.chooseRole();});
		$("#ll").on("click", function(){ luna.chooseRole();});
		$("#gl").on("click", function(){ gilderoy.chooseRole();});
    $("#sn").on("click", function(){ snape.chooseRole();});

		$("#attack").on("click", function(){
			hero.attack(enemy);
			enemy.counterAttack(hero);
			console.log(hero);
			console.log(enemy);
		});
		
})