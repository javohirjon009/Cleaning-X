import React from "react";
import "./header.modules.css";
import logo from "../assets/img/IMAGE (14).png";
import tel from "../assets/img/IMAGE (15).png";
import home_img from "../assets/img/IMAGE (16).png";

function Header() {
  return (
    <div>
      <header className="container">
        <div className="header_p">
          <img src={logo} alt="" />
          <p className="paragraf">Home</p>
          <p className="paragraf">About</p>
          <p className="paragraf">Services</p>
          <p className="paragraf">Articles</p>
          <p className="paragraf">Contact</p>
        </div>
        <div className="header_flex">
          <p className="paragraf">
            Cart <span>(0)</span>
          </p>
          <button>Get a free quote</button>
        </div>
      </header>
      <div className="header_home container">
        <div>
          <p className="quality_p">Quality cleaning for your home</p>
          <p className="p_element">
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="tel-flex">
            <button>Get a free quote</button>
            <div className="tel_nomer">
              <img src={tel} alt="" />
              <span>
                <p className="call_p">Call us now</p>
                <h2 className="nomer">(414) 567 - 2109</h2>
              </span>
            </div>
          </div>
        </div>
        <img src={home_img} alt="" />
      </div>
    </div>
  );
}

export default Header;
