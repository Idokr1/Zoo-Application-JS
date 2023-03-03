class Animal {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
  move = () => {
    console.log(`${this.name} the ${this.type} is moving`);
  };
}

class Mammal extends Animal {
  constructor(id, name, type, numberOfHairs) {
    super(id, name, type);
    this.numberOfHairs = numberOfHairs;
  }

  shed = () => {
    this.numberOfHairs *= 0.9;
    this.numberOfHairs = Math.floor(this.numberOfHairs);
    console.log(`${this.name} has now ${this.numberOfHairs} number of hairs`);
  };
}

class Avian extends Animal {
  constructor(id, name, type, numberOfFeathers) {
    super(id, name, type);
    this.numberOfFeathers = numberOfFeathers;
  }
  flap = () => {
    console.log(
      `${this.name} is flapping his wings, he has ${this.numberOfFeathers} many feathers`
    );
  };
}
Animal.prototype.age = 0;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const classSelection = document.querySelector("#animalClass");

  form.addEventListener("submit", addAnimal);
  classSelection.addEventListener("change", disableInput);

  function disableInput() {
    const classSelectionValue = classSelection.value;
    const mammalHairs = document.querySelector("[name='mammalHairs']");
    const avianFeathers = document.querySelector("[name='avianFeathers']");

    if (classSelectionValue == 1) {
      avianFeathers.required = false;
      avianFeathers.value = "";
      avianFeathers.disabled = true;
      avianFeathers.style.backgroundColor = "black";
      mammalHairs.disabled = false;
      mammalHairs.required = true;
      mammalHairs.style.backgroundColor = "white";
    }
    if (classSelectionValue == 2) {
      mammalHairs.required = false;
      mammalHairs.value = "";
      mammalHairs.disabled = true;
      mammalHairs.style.backgroundColor = "black";
      avianFeathers.disabled = false;
      avianFeathers.required = true;
      avianFeathers.style.backgroundColor = "white";
    }
  }

  function addAnimal(event) {
    event.preventDefault();
    const animalId = document.querySelector("[name='animalId']");
    const animalName = document.querySelector("[name='animalName']");
    const animalType = document.querySelector("[name='animalType']");
    const animalAge = document.querySelector("[name='animalAge']");
    const classSelectionValue = classSelection.value;
    const id = animalId.value;
    const name = animalName.value;
    const type = animalType.value;
    const age = animalAge.value;

    if (classSelectionValue == 1) {
      const mammalHairs = document.querySelector("[name='mammalHairs']");
      const hairs = mammalHairs.value;

      const newMammal = new Mammal(id, name, type, hairs);
      newMammal.age = age;
      const className = "Mammal";
      let createDiv = document.createElement("div");
      createDiv.innerText = `${newMammal.name} from class ${className} of type ${newMammal.type} is ${newMammal.age} years old and has ${hairs} number of hairs`;

      const moveBtn = document.createElement("button");
      moveBtn.innerText = "Move";
      moveBtn.addEventListener("click", newMammal.move);

      const shedBtn = document.createElement("button");
      shedBtn.innerText = "Shed";
      shedBtn.addEventListener("click", newMammal.shed);

      createDiv.appendChild(moveBtn);
      createDiv.appendChild(shedBtn);
      document.body.appendChild(createDiv);
    }
    if (classSelectionValue == 2) {
      const avianFeathers = document.querySelector("[name='avianFeathers']");
      const feathers = avianFeathers.value;

      const newAvian = new Avian(id, name, type, feathers);
      newAvian.age = age;
      const className = "Avian";
      let createDiv = document.createElement("div");
      createDiv.innerText = `${newAvian.name} from class ${className} of type ${newAvian.type} is ${newAvian.age} years old and has ${feathers} number of feathers`;

      const moveBtn = document.createElement("button");
      moveBtn.innerText = "Move";
      moveBtn.addEventListener("click", newAvian.move);

      const flapBtn = document.createElement("button");
      flapBtn.innerText = "Flap";
      flapBtn.addEventListener("click", newAvian.flap);

      createDiv.appendChild(moveBtn);
      createDiv.appendChild(flapBtn);
      document.body.appendChild(createDiv);
    }
  }
});
