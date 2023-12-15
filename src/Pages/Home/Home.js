import React from "react";
import "./Home..css";
import backgroundImage from "../../Assets/home_background.png";
import Button from "../../Components/Button/Button";
const Home = () => {
  return (
    <div className="home_main">
      <section className="home_main_sec-1">
        <img src={backgroundImage} alt="baground" />
      </section>
      <section className="home_main_sec-2">
        <p>
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <Button style ={'home_main_sec-2_button'}>Get free consultation</Button>
      </section>
    </div>
  );
};

export default Home;
