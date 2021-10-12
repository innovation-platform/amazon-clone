import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          title="The Krishna Key by Ashwin Sanghi"
          price={334}
          rating={5}
          image="https://m.media-amazon.com/images/I/91Kv3mzPOqL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="2"
          title="Wonderchef Nutri-Blend,22000 RPM Mixer-Grinder,Blender"
          price={2299}
          rating={4}
          image="https://m.media-amazon.com/images/I/61jed6B-qjL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Apple iPhone 11(64GB)-Black"
          price={38999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
        />
        <Product
          id="4"
          title="Fitbit FB512GLWT-FRCJK Advanced Smartwatch with Tools, Bluetooth-White"
          price={21500}
          rating={4}
          image="https://m.media-amazon.com/images/I/512XKj9zKxL._SL1000_.jpg"
        />
        <Product
          id="5"
          title="Irusu Play VR Plus Virtual Reality Headset with Headphones for Gaming(Black)"
          price={2469}
          rating={3}
          image="https://m.media-amazon.com/images/I/51NenGAJ90S._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Sony Bravia 80cm(32 inches)HD Ready Smart LED TV 32W6103(Black)"
          price={25999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71PnRfklxKS._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
