import React, { Component } from "react";

export default class BanChoi extends Component {
  xuLySuKien = (banChon) => {
    console.log(banChon);
    // const {xuLyBanChon} = this.props;
    // xuLyBanChon(banChon);
    this.props.xuLyBanChon(banChon);
    //truyen cho AppXucXac gia tri banChon
  };
  rederKetQuaXucXac = () => {
    const { ketQuaXucXac } = this.props;
    //render ketQuaXucXac
    return ketQuaXucXac.map((xucXac, index) => {
      return (
        //{ketQuaXucXac}[0].hinhAnh
        <img src={xucXac.hinhAnh} width={50} height={50} alt="hinh" />
      );
    });
  };

  render() {
    return (
      <div>
        {" "}
        <div className="col">
          <div className="d-flex justify-content-center">
            {this.rederKetQuaXucXac()}
            {/* <img
                src="./img/gameXucXac/1.png"
                width={50}
                height={50}
                alt="hinh"
              />
              <img
                src="./img/gameXucXac/5.png"
                width={50}
                height={50}
                alt="hinh"
              />
              <img
                src="./img/gameXucXac/2.png"
                width={50}
                height={50}
                alt="hinh"
              /> */}
          </div>
        </div>
        <div className="row text-center">
          <div className="col-6">
            <button //arrow function để hàm k chạy luôn khi render
              onClick={() => this.xuLySuKien(true)}
              className="bg-danger display-4 p-3 text-light"
            >
              TÀI{" "}
            </button>
          </div>

          <div className="col-6">
            <button
              onClick={() => this.xuLySuKien(false)}
              className="bg-dark display-4 p-3 text-light"
            >
              XỈU{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
