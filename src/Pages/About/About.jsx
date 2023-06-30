import React, { useEffect } from "react";
import "./about.css";
import { FiMail } from "react-icons/fi";
const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="container-fluid page-title">
        <h2>ABOUT US</h2>
        <p>HOME / ABOUT US </p>
      </div>

      <div className="about-main">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 about-main-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1>About Us</h1>
              <p>
                AUTONOID Tech Private Limited is a company that specializes in
                industrial automation, product development, and project
                management. Our primary focus is on sustainable innovation in
                the transportation industry. We aim to provide customer-centric
                solutions such as reliable electric vehicles and charging
                infrastructure, all powered by Green Energy (We strive to be a
                Non - conventional power producer). The company strives to make
                sustainable and clean transportation accessible, convenient, and
                affordable while minimizing the impact on the environment. Our
                expertise and unwavering commitment to innovation sets us apart
                as a leading player in the sustainable transportation and clean
                energy sector. AUTONOID Tech Private Limited's mission is to
                revolutionize warehousing and last mile delivery through
                sustainable innovation. We aspire to be a driving force in the
                transition towards a cleaner and healthier future by providing
                cutting-edge technology and solutions that promote safety,
                efficiency, and sustainability.
              </p>
              <span>FOR ANY QUERY?</span>
              <div className="about-question">
                <span className="about-question-left">
                  <FiMail />
                </span>
                <span className="about-question-right">
                  info@AUTONOID.co.in
                </span>
              </div>
            </div>
            <div
              className="col-lg-6 vision-main-right mt-5 mt-lg-0 p-lg-5 "
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682419359/AUTONOID/WhatsApp_Image_2023-04-22_at_8.26.31_PM_l2hk4e.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="vision-cards">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 vision-card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352274/AUTONOID/ecofriendly_w9mamv.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">ECO-FRIENDLY</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 vision-card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352274/AUTONOID/inovation_wytknc.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">INNOVATION</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 vision-card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card">
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352274/AUTONOID/india_kwnxif.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">MADE IN INDIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container vision-section">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h1>Mission</h1>
              <p>
                At AUTONOID Tech Private Limited, our mission is to
                revolutionize warehousing, last mile delivery through
                sustainable innovation, by leveraging our expertise in
                industrial automation, product development, and project
                management, to deliver customer-centric solutions such as -
                reliable electric vehicles, charging & swappable battery
                infrastructure, all powered by green energy. Our focus is to
                provide sustainable and clean transportation that is accessible,
                convenient, and affordable while minimizing our impact on the
                environment.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div>
              <h1>Vision</h1>
              <p>
                Our vision is to create a sustainable and eco-friendly
                transportation system fuelled by non-Conventional sources of
                energy. We aspire to be a driving force in the transition
                towards a cleaner and healthier future by offering cutting-edge
                technology and solutions. To achieve this, we strive to provide
                innovative and sustainable transportation, Charging and Energy
                solutions that not only meet but exceed customer expectations.
                Our focus is on promoting safety, efficiency, and
                sustainability, and we aim to lead the industry in these areas.
                We are committed to making a positive impact on the environment
                and contributing to the growth of the sustainable transportation
                & Clean Energy sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
