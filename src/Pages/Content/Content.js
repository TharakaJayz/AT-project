import React from "react";
import monitorImage from "../../Assets/monitor.png";
import searchImage from "../../Assets/search.png";
import "./Content.css";
import Button from "../../Components/Button/Button";
const Content = () => {
  return (
    <div className="content_main">
      <div className="content_content">
        <section className="content_content_section-1">
          <div className="content_section_div_1">
            <img src={monitorImage} alt="monitor" />
          </div>
          <div className="content_section_div_2">
            <h3 className="content_section_div_2_h3">
              Web & Mobile App Development
            </h3>
            <p className="content_section_div_2_p">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <Button>LEARN MORE</Button>
          </div>
        </section>
        <section className="content_content_section-2">
          <div className="content_section_div_1 content_section-2_div_1 ">
            <img src={searchImage} alt="search" id="content_section-2_div_1_img"/>
          </div>
          <div className="content_section_div_2 content_section-2_div_2">
            <h3 className="content_section_div_2_h3">
            Digital Strategy Consulting
            </h3>
            <p className="content_section_div_2_p content_section-2__div_2_p">
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <Button>LEARN MORE</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
