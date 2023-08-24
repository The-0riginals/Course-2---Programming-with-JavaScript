// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(array){
    for (item of array) {
        console.log(item);
    }
}

logDairy(dairy);
// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(bird) {
    for (i of Object.keys(bird)) {
        console.log(i +": "+bird[i])
    }
}
birdCan(bird)

// Task 3
function animalCan(aninal) {
    for (i in aninal) {
        console.log(i +": "+aninal[i])
    }
}
animalCan(bird)

// i cant see the difference between solution and solution2 but this wasnt accepted by the coursera grader