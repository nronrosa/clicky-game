import React, { Component } from "react";
import CarsCard from "./components/Card/carsCard";
import Wrapper from "./components/Wrapper/wrapper";
// import Title from "./components/Title";
import Heading from "./components/Heading/heading";
import cars from "./cars.json";

class App extends Component {
  state = {
    cars,
    clicked: [],
    curScore: 0
  };

  shuffleCars(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // console.log(array);
    return array;
  }

  handleClick = id => {
    // console.log("Image clicked " + id);
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ clicked: this.state.clicked.concat(id) });
      console.log("ID clicked: " + this.state.clicked.concat(id));
      this.handleIncrement();
    } else {
      console.log("clicked it twice you lose, restart");
      this.handleRestart();
    }
    const carsShuffled = this.shuffleCars(cars);
    this.setState({ cars: carsShuffled });
  };

  handleIncrement = () => {
    const newScore = this.state.curScore + 1;
    this.setState({ curScore: newScore });
    console.log(newScore);
  };

handleRestart = () => {
  console.log("RESTART")
  this.setState({
    curScore: 0,
    clicked: []
  });
  this.shuffleCars(cars);
};


  render() {
    return (
      <Wrapper>
        <Heading>XXX</Heading>
        
        <h2>
        SCORE: {this.state.curScore}
        </h2>
        <div className="card-container">
                  {this.state.cars.map(car => (
          <CarsCard
            onClick={this.handleClick}
            id={car.id}
            key={car.id}
            name={car.name}
            image={car.image}
          />
        ))}
        </div>

      </Wrapper>
    );
  }
}

export default App;
