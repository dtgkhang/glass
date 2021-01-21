import React, { Component } from "react";

class Glass extends Component {
  hanldeClick = () => {
    const { glass, handleGlassSelected } = this.props;
    console.log(glass);
    handleGlassSelected(glass);
  };
  render() {
    console.log(this.props);
    const { glass } = this.props;
    return (
      <button onClick={this.hanldeClick} className="btn btn-outline-secondary">
        <img
          src={glass.url}
          alt="hinh"
          style={{ width: 100, borderRadius: 20 }}
        />
      </button>
    );
  }
}

export default Glass;
