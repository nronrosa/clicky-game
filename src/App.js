import React, { Component } from "react";
import CarsCard from "./components/Card/carsCard";
import Wrapper from "./components/Wrapper/wrapper";
import Heading from "./components/Heading/heading";
import cars from "./cars.json";
import "./App.css";

class App extends Component {
  state = {
    cars,
    clicked: [],
    curScore: 0,
    message: ""
  };

  shuffleCars(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.setState({ message: "" });
      this.handleIncrement();
    } else {
      this.setState({ message: "- YOU LOSE, try again!" });
      this.handleRestart();
    };
    const carsShuffled = this.shuffleCars(cars);
    this.setState({ cars: carsShuffled });
  };

  handleIncrement = () => {
    const newScore = this.state.curScore + 1;
    this.setState({ curScore: newScore });
    if (newScore === 12) {
      this.setState({ message: "- YOU WIN!" });
      this.handleRestart();
    } 
  };

  handleRestart = () => {
    this.setState({
      curScore: 0,
      clicked: [],
    });
    this.shuffleCars(cars);
  };

  render() {
    return (
      <Wrapper>
        <Heading/>
        <h2 className="score-message">SCORE: {this.state.curScore} {this.state.message}</h2>
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
  };
};

export default App;
