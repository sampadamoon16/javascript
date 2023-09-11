// let car1 = {
//     name: "Sx4",
//     fuelType: "Petrol"
// }
// console.log(car1["fuelType"])
// console.log(car1.fuelType)


// let f1= function(){
//     console.log("this is function")
// }
// f1()
// let car1 = {
//     name: "Sx4",
//     fuelType: "Petrol"
// }
// console.log(car1["fuelType"])



// let car1 = {
//     name: "Sx4",
//     fuelType: "Petrol",
//     f1 : function(){
//         console.log("this is function")
//     },
//     tyre:["t1","t2","t3","t4"]          
// }
// console.log(car1.fuelType)
// console.log(car1.f1())
// console.log(car1.tyre)


let car1 =[{

  name: "Sx4",
  fuelType: "Petrol",

  f1: function () {
    console.log("this is function")
  },
  tyre: ["t1", "t2", "t3", "t4"],
  other:{
      name1:"t1",
      company:"toyato",
      Price:800000
  },
},

{
    name1:"t1",
    company:"nano",
    Price:800000

},
{
  name1:"t3",
  company:"toyato",
  other:{
    name1:"t1",
    company:"toyato",
    Price:900000
},
},
{
  name1:"t4",
  company:"maruti",
  Price:1000000
}
]


// objectLenght = Object.keys(car1).length;

// document.querySelector('.output').textContent
// = objectLenght;

// console.log(car1.other.length)
for (let i = 0; i < 4; i++) {
  if (car1[i].other.Price<1000000){
    console.log(`car name: ${car1[i].other.company}`)
  }

  }