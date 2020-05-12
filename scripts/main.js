

var distanceGoal = 204;

  function FoodItem(amount, item, idAmount,idName,value){
    this.amount=amount;
    this.item=item;
    this.idAmount=idAmount;
    this.idName=idName;
    this.value=value;



    this.listIt=function(){
      document.getElementById(idAmount).innerHTML=amount;
      document.getElementById(idName).innerHTML=item;
    }

    this.increaseItem=function(){
      amount=document.getElementById(idAmount).innerHTML;
      amount++;
      document.getElementById(idAmount).innerHTML = amount;      
      this.amount=amount;
      totalFoodSupply()
      console.log(totalFoodSupply());

    }

    this.decreaseItem=function(){
      amount=document.getElementById(idAmount).innerHTML;
      amount--;
      this.amount=amount;
      totalFoodSupply();
      if (amount == 0 ) {
      alert("You're out of stock of " + item + " !") 
      document.getElementById(idAmount).style.color="red";
      document.getElementById(idName).style.color="red";
      
  }
      document.getElementById(idAmount).innerHTML = amount;
    }

  }

var fooditem1 = new FoodItem(3,"crackers", 'amount-item1','item1',0.2);
var fooditem2 = new FoodItem(53,"Shortbread cookies",'amount-item2','item2',0.15);
var fooditem3 = new FoodItem(354,"Beef steak",'amount-item3','item3',0.5);
var fooditem4 = new FoodItem(27,"Candy coated peanuts",'amount-item4','item4',1.1);

fooditem1.listIt();
fooditem2.listIt();
fooditem3.listIt();
fooditem4.listIt();




function totalFoodSupply(){
  totalFood=document.getElementById("days-food").innerHTML;
  totalFood=(fooditem1.amount*fooditem1.value)+(fooditem2.amount*fooditem2.value)+(fooditem3.amount*fooditem3.value)+(fooditem4.amount*fooditem3.value);
  document.getElementById("days-food").innerHTML=Math.round(totalFood);
}

totalFoodSupply();

function ShipInfo(fuel, speed,distanceTravelled){
    this.fuel=fuel;
    this.speed=speed;
    this.distanceTravelled=distanceTravelled;

    this.speedUp = function(){

          if(Math.round(distanceTravelled)==Math.round(distanceGoal)) {
            document.getElementById("current-speed").innerHTML=0;
            document.getElementById("distance-travelled").innerHTML=Math.round(distanceTravelled);
            document.getElementById("distance-travelled").style.color="green";
            alert("Welcome on Mars!");
            clearInterval(updateInfo); 
            
          }
          else {
          distanceTravelled+=speed*3;
          console.log(distanceTravelled);
          fuel-=500;
          document.getElementById("distance-travelled").innerHTML=Math.round(distanceTravelled);
          document.getElementById("current-fuel").innerHTML=fuel;
          }
          
        }
}

var shipEnviroment = new ShipInfo (203400, 2.3,100);

var updateInfo=setInterval(function(){
    shipEnviroment.speedUp();
}, 3000);










