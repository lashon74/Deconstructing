import animals, { useAnimals } from "./data";
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// Sets as first and second item from animals array names must be unique when you destructure can only use a name once
const [cat, dog] = animals;

// console.log(cat);

// Destructure an object in the array is is equivilent to cat.name or cat.sound thesee have to match it is best to give it a default value
// const { name = "Fluffy", sound = "Purr" } = cat;

// Destructuring nexted objs
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water }
// } = cat;
// console.log(food);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// Giving a custom name is usfull when your importing information you didnt create
// const {name : catName, sound: catSound} = cat;

// CHALLENGE: uncomment the code below and see the car stats rendered

const [honda, tesla] = cars;

const {
    speedStats: { topSpeed: hondaTopSpeed }
  } = honda,
  {
    speedStats: { topSpeed: teslaTopSpeed }
  } = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
