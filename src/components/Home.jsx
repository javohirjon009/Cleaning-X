import React from "react";
import "./home.modules.css";
import kalendar from "../assets/img/IMAGE (17).png";
import karta from "../assets/img/IMAGE (18).png";
import clear from "../assets/img/IMAGE (19).png";
import house from "../assets/img/IMAGE (20).png";

function Home() {
  return (
    <div className="container">
      <div>
        <p className="about_us">About Us</p>
        <p className="about_us_bottom">
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
      </div>
      <div className="cart_flex">
        <div className="cart">
          <img src={kalendar} className="kal" alt="Kalendar rasmi" />
          <p className="cart_title">1. Schedule online</p>
          <p className="cart_p">
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            sed n.
          </p>
        </div>
        <div className="cart">
          <img src={karta} className="kal" alt="Karta rasmi" />
          <p className="cart_title">2. Pay online easily</p>
          <p className="cart_p">
            Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
            at nunc.
          </p>
        </div>
        <div className="cart">
          <img src={clear} className="kal" alt="Clear rasmi" />
          <p className="cart_title">3. Get your house cleaned</p>
          <p className="cart_p">
            Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus
            eleifend.
          </p>
        </div>
      </div>
      <div className="btn_flex">
        <button>Get a free quote</button>
        <button className="Explore_btn">Explore services</button>
      </div>
      <div>
        <div className="title_service">
          <p className="our_ser">Our Services</p>
          <button className="Explore_btn">Explore services</button>
        </div>
        <div className="page_flex">
          <div className="page">
            <img src={house} className="house_img" alt="" />
            <p className="page_text">House cleaning</p>
            <p className="lorem_text">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="page">
            <img src={house} className="house_img" alt="" />
            <p className="page_text">House cleaning</p>
            <p className="lorem_text">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="page">
            <img src={house} className="house_img" alt="" />
            <p className="page_text">House cleaning</p>
            <p className="lorem_text">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
