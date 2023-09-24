let food = require("./food.json")

//list all the food items

let fooditem = food.map(items =>{
      return (items.foodname);
})
console.log(fooditem);


// list all the food items with category vegetables

let allvegetables = food.filter(items =>{
      return (items.category === "Vegetable");
})
console.log(allvegetables);


// list all the food items with category fruit

let allfruit = food.filter(items =>{
      return(items.category === "Fruit");
})
console.log(allfruit);


// list all the food items with category protien

let allprotein = food.filter(items =>{
      return(items.category === "Protein");
})
console.log(allprotein);


// list all the food items with category nuts

let allnuts = food.filter(items =>{
      return(items.category === "Nuts");
})
console.log(allnuts);


// list all the food items with category grains

let allgrain = food.filter(items =>{
      return(items.category === "Grain");
})
console.log(allgrain);


// list all the food items with category dairy

let alldairy = food.filter(items =>{
      return(items.category === "Dairy");
})
console.log(alldairy);


// list all the food items with calorie above 100

let calorie = food.filter(items =>{
      return(items.calorie > 100)
})
console.log(calorie);


// list all the food items with calorie below 100

let calorielow = food.filter(items =>{
      return(items.calorie < 100)
})
console.log(calorielow);


// list all the food items with highest protien content to lowest

let htolprotein = food.sort((l ,h) =>{
      return h.protiens - l.protiens;
})
console.log(htolprotein);



// list all the food items with lowest cab content to highest

let cabsort = food.sort((l ,h)=>{
      return l.cab - h.cab;
})
console.log(cabsort);