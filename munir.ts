
interface Places {
    name: string;
    adress: string;
    printplace: Function;
  }
  class Place implements Places{
     name:string;
     adress:string;
    image: string;
     constructor(a:string, b:string, c:string ){
         this.name=a;
         this.adress=b;
       this.image = c;
     }
     printplace(){
       return `<div class="all">
       
       <h5 class="title"> . ${this.name} </h5>
      
       <p> . ${this.adress} years old.</p>
       <a href="#"></a>
       <div class="image">.  <img src="${this.image}" width="500px;" alt="..."></div> <br> <br>
      
         </div>`
     }
  }
  var place1 = new Place("St.charles Church","Karlsplatz 1,1010 Wien", "img CR5/Places_1.jpg");
  var place2 = new Place("Zoo Vienna","Maxingstraße 13b, 1130 Wien", "img CR5/Places_2.jpg");
  
  var array = [place1, place2,];
  for (let val of array) {
    (<HTMLElement>document.getElementById("place")).innerHTML += val.printplace();
  }
  
//  kjgjhhjkj444444444444444
  
interface restaurants {
  name1: string;
  adress1: string;
  links:string;
  printrest: Function;
}
class Rest implements restaurants{
   name1:string;
   adress1:string;
   links:string;
  image1: string;
   constructor(a:string, b:string, c:string, d:string ){
       this.name1=a;
       this.adress1=b;
       this.links = c;
     this.image1 = d;
     
   }
   printrest(){
     return `<div class="all">
     
     <h5 class="title"> . ${this.name1} </h5>
    
     <p> . ${this.adress1} years old.</p>
     <a href="">  .  ${this.links}</a>
     <div class="image">.  <img src="${this.image1}" width="500px;" height="350px;" alt="..."></div> <br> <br>
    
       </div>`
   }
}
var rest1 = new Rest("Lemon Leaf Thai Restaurant","Kettenbrückengasse 19, 1050 Vienna, +43(1)5812308","www.lemonleaf.at", "img CR5/rest_1.png");
var rest2 = new Rest("SIXTA","1050 Wien, Schönbrunner Straße 21 ,  +43 1 58 528 56 l +43 1 58 528 56", "http://www.sixta-restaurant.at/","img CR5/rest_2.png");

var array1 = [rest1, rest2,];
for (let val of array1) {
  (<HTMLElement>document.getElementById("restaurants")).innerHTML += val.printrest();
}

//  dhldkhkmfddf77777777777777777777


interface Event {
    name2: string;
    links2: string;
    zeiten :string;
    adress2: string;
    price : number;
    printevvent: Function;
  }
  class Evvent implements Event{
     name2:string;
     links2: string;
     zeiten :string;
     adress2:string;
     price : number;
    image2: string;
     constructor(a:string, b:string, c:string, d:string, e:number,f:string  ){
         this.name2=a;
         this.links2=b;
         this.zeiten=c;
         this.adress2=d;
         this.price=e;
         this.image2=f;
     }
     printevvent(){
       return `<div class="all">
       
       <h5 class="title"> . ${this.name2} </h5>
       <a href="#"> .  ${this.links2}</a>
       <h5 class="zeit"> . ${this.zeiten} </h5>
       <p> . ${this.adress2} years old.</p>
       <h5 class="price"> . ${this.price} </h5>
       <div class="image">.  <img src="${this.image2}" width="500px;" height="350px;" alt="..."></div>
       <br> <br>
      
         </div>`
     }
  }
  var evvent1 = new Evvent("Kris Kristofferson","http://kriskristofferson.com/","Fr., 15.11.2021. 20:00", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien", 58.50 ,"img CR5/events_1.jpg");
  var evvent2 = new Evvent("Lenny Kravitz","www.lennykravitz.com/", "Sat, 09.12.2029 - 19:30", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", € 47.80, "img CR5/Events_2.jpg");
  
  var array2 = [evvent1, evvent2,];
  for (let val of array2) {
    (<HTMLElement>document.getElementById("events")).innerHTML += val.printevvent();
  }




// interface events {
//   name2: string;
//   adress2: string;
//   printevent: Function;
// }
// class Event implements events{
//    name2:string;
//    adress2:string;
//   image2: string;
//    constructor(a:string, b:string, c:string ){
//        this.name2=a;
//        this.adress2=b;
//      this.image2 = c;
//    }
//    printevent(){
//      return `<div class="all">
     
//      <h5 class="title"> . ${this.name2} </h5>
    
//      <p> . ${this.adress2} years old.</p>
//      <a href="#"></a>
//      <div class="image">.  <img src="${this.image2}" width="500px;" height="350px;" alt="..."></div>
    
//        </div>`
//    }
// }
// var event1 = new Event("St.charles Church","Karlsplatz 1,1010 Wien", "img CR5/Events_1.jpg");
// var event2 = new Event("Zoo Vienna","Maxingstraße 13b, 1130 Wien", "img CR5/Events_2.jpg");

// var array2 = [event1, event2,];
// for (let val of array2) {
//   (<HTMLElement>document.getElementById("events")).innerHTML += val.printevent();
// }


