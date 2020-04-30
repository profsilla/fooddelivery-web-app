import React, { Component } from "react";
import ScoreCard from "./ScoreCard";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    //Set up state
    this.state = {
      scores: [
        {
          id: 1,
          name: "ahjuma",
          score: 1001
        },
        {
          id: 2,
          name: "jeffles",
          score: 20
        },
        {
          id: 3,
          name: "stinkface",
          score: 500
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {" "}
        {/* here is another comment */}
        <h1>Scoreboard App</h1>
        {/* This is the comment: command + /   */}
        <div className="score-container">{this._scoresAsCards()}</div>
      </div>
    );
  }

  _scoresAsCards() {
    const cards = this.state.scores.map(score => {
      return (
        <ScoreCard
          key={score.id}
          id={score.id}
          name={score.name}
          score={score.score}
          // handleClick={this._incrementScoreById.bind(this)}
          handleClick={id => this._incrementScoreById(id)}
          handleDelete={id => this._handleDecrement(id)}
        />
      );
    });
    return cards;
  }

  _handleDecrement(id) {
    const newScores = this.state.scores.map(bob => {
      return bob.id !== id ? bob : { ...bob, score: bob.score - 1 };
    });
    //and call this.setState
    this.setState({
      scores: newScores
    });
  }

  //Version 1: .map, manually constructing replacement
  // _incrementScoreById(id) {
  //   //find the player in this.state.scores
  //   //increment their score
  //   const newScores = this.state.scores.map(jeff => {
  //     if (jeff.id !== id) {
  //       return jeff;
  //     } else {
  //       return {
  //         id: jeff.id,
  //         name: jeff.name,
  //         score: jeff.score + 1
  //       };
  //     }
  //   });
  //   //and call this.setState
  //   this.setState({
  //     scores: newScores
  //   });
  // }

  //Version 2: .map, using a shorthand to copy values out of the original
  // _incrementScoreById(id) {
  //   //find the player in this.state.scores
  //   //increment their score
  //   const newScores = this.state.scores.map(bruce => {
  //     if (bruce.id !== id) {
  //       return bruce;
  //     } else {
  //       return {
  //         ...bruce,
  //         score: bruce.score + 1
  //       };
  //     }
  //   });
  //   //and call this.setState
  //   this.setState({
  //     scores: newScores
  //   });
  // }

  //Version 3: .map, object copy + ternary + implicit return
  //using shorthand to copy values out of the original score
  _incrementScoreById(id) {
    //find the player in this.state.scores
    //increment their score
    const newScores = this.state.scores.map(bob => {
      return bob.id !== id ? bob : { ...bob, score: bob.score + 1 };
    });
    //and call this.setState
    this.setState({
      scores: newScores
    });
  }
}

export default App;
