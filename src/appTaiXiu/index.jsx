import React, { Component } from "react";
import "./styles.css";
import BanChoi from "./BanChoi";
import KetQua from "./KetQua";
import BtnChoi from "./BtnChoi";
//TIỆN ÍCH
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class AppXucXac extends Component {
  //6 mặt xucxac
  xucXacMau = [
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
    {
      ma: 2,
      hinhAnh: "./img/gameXucXac/2.png",
      soDiem: 2,
    },
    {
      ma: 3,
      hinhAnh: "./img/gameXucXac/3.png",
      soDiem: 3,
    },
    {
      ma: 4,
      hinhAnh: "./img/gameXucXac/4.png",
      soDiem: 4,
    },
    {
      ma: 5,
      hinhAnh: "./img/gameXucXac/5.png",
      soDiem: 5,
    },
    {
      ma: 6,
      hinhAnh: "./img/gameXucXac/6.png",
      soDiem: 6,
    },
  ];
  state = {
    banChon: true, //true tài / false xỉu
    tongSoBanChoi: 0,
    soBanThang: 0,
    ketQuaXucXac: [
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
    ],
  };
  //state ở đâu thì set state phải ở component đó
  xuLyKetQua = () => {
    console.log("Xu ly ket qua");
    const ngauNhien = getRandomInt(6); //0->5
    const newKetQuaXucXac = [
      this.xucXacMau[getRandomInt(6)],
      this.xucXacMau[getRandomInt(6)],
      this.xucXacMau[getRandomInt(6)],
    ];
    //tong diem voi reduce
    const tongDiem = newKetQuaXucXac.reduce((tong, xucXac) => {
      return (tong += xucXac.soDiem);
    }, 0);
    //xet ket qua tai or xiu
    let taiOrXiu;
    if (tongDiem >= 3 && tongDiem <= 10) {
      taiOrXiu = false;
    } else {
      taiOrXiu = true;
    }
    //xet dung voi minh chọn
    let { tongSoBanChoi, soBanThang } = this.state;
    if (taiOrXiu === this.state.banChon) {
      soBanThang += 1;
    }
    tongSoBanChoi += 1;
    //cập nhật
    this.setState({
      ketQuaXucXac: newKetQuaXucXac,
      soBanThang,
      tongSoBanChoi,
    });
  };
  xuLyBanChon = (banChon) => {
    this.setState({
      //   banChon : banChon,
      banChon,
    });
  };
  render() {
    return (
      <div>
        <div
          className="gameXucXac"
          style={{
            backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
            width: "100%",
            height: "100%",
            position: "fixed",
            left: 0,
            top: 0,
          }}
        >
          <div className="container">
            <h3 className="display-4 text-center">Xúc Xắc</h3>
            <h5>"Còn chơi là còn gỡ"</h5>
            <BanChoi
              xuLyBanChon={this.xuLyBanChon}
              ketQuaXucXac={this.state.ketQuaXucXac}
            />
          </div>
          <KetQua
            banChon={this.state.banChon}
            tongSoBanChoi={this.state.tongSoBanChoi}
            soBanThang={this.state.soBanThang}
          />
          <BtnChoi xuLyKetQua={this.xuLyKetQua} />{" "}
          <p style={{ fontSize: 10 }}>dtgk</p>
        </div>
      </div>
    );
  }
}
