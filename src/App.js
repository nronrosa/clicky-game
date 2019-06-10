import React, { Component } from "react";
import CarsCard from "./components/Card/carsCard";
import Wrapper from "./components/Wrapper/wrapper";
// import Title from "./components/Title";
import Heading from "./components/Heading/heading";
import cars from "./cars.json";

class App extends Component {
  // Setting this.state.cars to the cars json array
  state = {
    cars,
    clicked: []
    // carsArray: this.shuffleCars
  };

  shuffleCars(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  handleClick = id => {
    let carsShuffled = this.shuffleCars(cars);
    this.setState({ cars: carsShuffled });
    console.log("Image clicked " + id);
  };

  render() {
    return (
      <Wrapper>
        <Heading>Sports Cars</Heading>
        <h2>
          Click on an image to earn points, but don't click on any more than
          once!
        </h2>
        {this.state.cars.map(car => (
          <CarsCard
            // removeFriend={this.removeFriend}
            onClick={this.handleClick}
            id={car.id}
            key={car.id}
            name={car.name}
            image={car.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
