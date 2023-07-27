import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title"> My Certificates </h2>
      <span className="section__subtitle">
        {" "}
        Successfully completed certifications
      </span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            {" "}
            <img src="https://i.ibb.co/wrfmJx6/certificate1.jpg" alt="" />
          </div>
          <p>
            {" "}
            📌 Meta Front-End Developer <br></br>
            Issued By Meta At Coursera <br></br>
            Date: 01/07/2023{" "}
          </p>
        </div>
        <div className="services__content">
          <div>
            {" "}
            <img src="https://i.ibb.co/LkQS6Ps/certificate2.jpg" alt="" />
          </div>

          <p>
            {" "}
            📌 MATLAB-Onrmap<br></br>
            Issued By MATLAB At Math Work<br></br>
            Date: 01/11/2022{" "}
          </p>
        </div>

        <div className="services__content">
          <div>
            {" "}
            <img src="https://i.ibb.co/YQngS8Z/certificate3.jpg" alt="" />
          </div>
          <br></br>
          <p>
            {" "}
            📌 Practical Ethical Hacking<br></br>
            Issued By TCM Security<br></br>
            Date: 19/10/2022{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
