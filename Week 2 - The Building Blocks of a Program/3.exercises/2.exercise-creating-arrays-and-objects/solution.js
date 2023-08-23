var clothes = [];
clothes.push("dress"); // 1st item of clothing
clothes.push("T-shirt"); // 2nd item of clothing
clothes.push("jeans"); // 3rd item of clothing
clothes.push("skirt"); // 4th item of clothing
clothes.push("hoodie"); // 5th item of clothing
clothes.pop();
clothes.push('red scarf');
console.log(clothes);
console.log(clothes[2]);
//-----------------------------------------
var favCar = {};
favCar.color = "black";
favCar.covertible = true;
console.log(favCar);
//-----------------------------------------
let a =9;
a =10;
console.log(a);
//-----------------------------------------
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
//-----------------------------------------
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]