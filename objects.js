class Animal {
  // constructor method to initialize object properties
  constructor(name, color, isWild, sound) {
    this.name = name;
    this.color = color;
    this.isWild = isWild;
    this.sound = sound;
  }
  //   adding methods
  makeSound() {
    console.log(`${this.name} ${this.sound}`);
  }
  aboutAnimal() {
    console.log(`the ${this.color} colored ${this.name} ${this.sound}`);
  }
}
// let animalOne = new Animal("dog", "black", false);
// console.log(animalOne);

// class AnimalClassification extends Animal {
//   constructor(name, order) {
//     super(name);
//     this.order = order;
//   }

//   classifyByOrder(animalName) {
//     const animalClass = animals.find((animal) => animal.name === animalName);
//     if (animalClass) {
//       console.log(`${animalClass.name} is a ${animalClass.order}`);
//     } else {
//       console.log(`${animalName} class not found`);
//     }
//     return this;
//   }
// }
// const dog = new Animal("dog", "black", "true", "barks");
// const lion = new Animal("lion", "gold", "false", "roar");

// dog.makeSound();
// dog.aboutAnimal();

// lion.makeSound();
// lion.aboutAnimal();

const dog = new Animal("dog", "black", "true", "barks");

const lion = new Animal("lion", "gold", "false", "roar");

const goat = new Animal("goat", "black", "false", "bleats");

const mosquito = new Animal("mosquito", "black", "false", "buzz");
const animal = [dog, lion, goat, mosquito];

class ListAllAnimals extends Animal {
  ListAllAnimalsNameAndColors() {
    animals.map((animal) => {
      console.log(animal.name, animal.color);
    });
  }
}
const listAllAnimals = new ListAllAnimals();
listAllAnimals.ListAllAnimalsNameAndColors();
