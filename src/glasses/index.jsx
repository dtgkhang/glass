// state ở component nào thì setState tại component đó
/**
 * có 2 yếu tố để xác định state được lưu ở component nào :
 *      1/ component phải chứa giao diện
 *      2/ component chứa nút xử lý
 */
import React, { Component } from "react";
import Glass from "./glass";
import Model from "./model";

class Glasses extends Component {
  state = {
    glassSelected: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  glassesList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  handleGlassSelected = (glassSelected) => {
    this.setState({
      //   glassSelected: glassSelected,
      glassSelected,
    });
  };

  renderGlassesList = () => {
    // const listJSX = this.glassesList.map((glass, index) => {
    //   return (
    //     <div className="col-3">
    //       <Glass />
    //     </div>
    //   );
    // });
    // console.log(listJSX);
    return this.glassesList.map((glass, index) => {
      console.log("glass : ", glass);
      return (
        <div className="col-3" key={index}>
          <Glass handleGlassSelected={this.handleGlassSelected} glass={glass} />
        </div>
      );
    });
  };

  render() {
    return (
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
            <Model glassSelected={this.state.glassSelected} />
            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
              {this.renderGlassesList()}
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default Glasses;
