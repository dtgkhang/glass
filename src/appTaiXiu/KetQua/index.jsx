import React, { Component } from "react";
import BtnChoi from "../BtnChoi";

export default class KetQua extends Component {
  render() {
    const { banChon, tongSoBanChoi, soBanThang } = this.props;
    return (
      // <></>
      //<React.Fragment/>
      <div className="container text-center display-5">
        <div>
          bạn chọn :{" "}
          <span className="text-danger">{banChon ? "Tài" : "Xỉu"}</span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">{soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi :{" "}
          <span className="text-warning">{tongSoBanChoi}</span>
        </div>
        {/* <BtnChoi /> */}
      </div>
    );
  }
}
