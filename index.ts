//get css
import './style.css';

//object definition
const appDiv: HTMLElement = document.getElementById('app');
let x:Number
class top{
  renk='red';
  cap=3.14;
 gravity(){
   x=1
 }
}

//variable definition
var name:string = "Dj FunkyKanky"; 
var cuk:number = 50;
var tasak:number = 42.50
var sum = cuk + tasak /1.1 
console.log("İsim "+name) 
console.log("Çük uzunluğu: "+cuk) 
console.log("Taşak Ağırlığı : "+tasak) 
console.log("Toplam Karizma Değeri: "+sum)

// data type inferred as  number 
var num : number = 2;    
console.log("değer "+num); 
num = 12;
console.log(num);

// flow
var i:number = 1 
while(i<=10) { 
   if (i % 6 == 0) {   
      console.log ("The first multiple of 6  between 1 and 10 is : "+i) 
      break     //exit the loop if the first multiple is found 
   } 
   i++ 
}  //outputs 5 and exits the loop


