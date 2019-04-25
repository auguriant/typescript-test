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



//function

function disp_details(id:number,name:string,mail_id?:string) { 
   console.log("ID:", id); 
   console.log("İsim:",name); 
   
   if(mail_id!=undefined)  
   console.log("Email",mail_id); 
}
disp_details(123,"hele hele");
disp_details(111,"holo holo","meme@sex.com");



//rest paramaters


function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("toplam",sum) 
} 
addNumbers(1,2,3,4,5) 
addNumbers(10,10,10,10,10,8)


//default parameters

function calculate_discount(price:number,rate:number = 0.50) { 
  
   var discount = price * rate; 
   console.log("İndirim: ",discount); 

} 

calculate_discount(1000) 
calculate_discount(1000,0.30)

