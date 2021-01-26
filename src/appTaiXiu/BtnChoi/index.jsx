import React, { Component } from "react";

export default class BtnChoi extends Component {
  xuLyChoiGame = () => {
    const { xuLyKetQua, choiGame } = this.props;
    // xuLyKetQua();
    choiGame();
  };
  render() {
    return (
      <button
        onClick={this.xuLyChoiGame}
        className="btn btn-success"
        style={{ fontSize: 30 }}
      >
        PLAY GAME
      </button>
    );
  }
}
