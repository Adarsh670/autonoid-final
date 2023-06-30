import "./home.css";
// import { FaCircleNotch } from "react-icons/fa";
import { useEffect } from "react";
const specificationDetails = [
  {
    title: "Body Type",
    desc: "Electric Bike",
  },
  {
    title: "Start",
    desc: "Push Button Start",
  },
  {
    title: "Torque (Motor)",
    desc: "4 Nm (1.2 KW)",
  },
  {
    title: "Transmission",
    desc: "Automatic",
  },
  {
    title: "Drive Type",
    desc: "Hub motor / Gear Driven",
  },
  {
    title: "Speed",
    desc: "25Km/h (NON RTO)",
  },
  {
    title: "Speedometer,Trip meter",
    desc: "Digital",
  },
  {
    title: "Charging Point",
    desc: "YES (48V, 60V)",
  },
  {
    title: "Charging Capacity",
    desc: "52Ah",
  },
  {
    title: "Brakes",
    desc: "Drum (Front,Rear)",
  },
  {
    title: "Tyre Type, Size",
    desc: "Radial, 12",
  },
  {
    title: "Wheel Type",
    desc: "Steel",
  },
  {
    title: "Charging Time",
    desc: "3-4 hrs (Lithium ion), 6-7 hrs  Lead acid Battery",
  },
  {
    title: "Seat Type",
    desc: "Single",
  },
  {
    title: "Weight Carrying Capacity",
    desc: "400kg",
  },
  {
    title: "Space for cargo",
    desc: "YES",
  },
  {
    title: "Low Battery Indicator",
    desc: "YES",
  },
  {
    title: "Anti Theft Alarm",
    desc: "YES",
  },
  {
    title: "Passenger Foot Rest",
    desc: "YES",
  },
];
const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid home-main-banner">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-5 home-main-banner-left">
                  <div className="banner-text">
                    <h1>PRITH-EV </h1>
                    <h2>M300</h2>
                  </div>
                </div>
                <div className="col-lg-7 home-main-banner-right">
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352275/AUTONOID/prith_bpkmft.png"
                    className="img-fluid"
                    alt="parth"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-5 home-main-banner-left">
                  <div className="banner-text">
                    <h1>PRITH-EV </h1>
                    <h2>M200</h2>
                  </div>
                </div>
                <div className="col-lg-7 home-main-banner-right">
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684304415/Autonoid/threewheel_hkzfny.png"
                    className="img-fluid"
                    alt="parth"
                  />
                </div>
              </div>
            </div>
           
           
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <div className="container-fluid home-main-banner">
        <div className="row">
          <div className="col-lg-5 home-main-banner-left">
            <div className="banner-text">
              <h1>PRITH-EV </h1>
              <h2>M300</h2>
            </div>
          </div>
          <div className="col-lg-7 home-main-banner-right">
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352275/AUTONOID/prith_bpkmft.png"
              className="img-fluid"
              alt="parth"
            />
         
          </div>
        </div>
      </div> */}

      <div className="path-para1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <h1
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="2000"
              >
                EV for GREEN TRANSITION
              </h1>
              <h2
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="2000"
              >
                Robust EV for Cargo
              </h2>
              <p className="path-para1-p">
                The PRITH-EV M300 electric cargo scooter from AUTONOID is an
                eco-friendly solution for businesses engaged in delivery
                services, warehouses, and shipment delivery. With a range of
                120km on a single charge and a high carrying capacity of up to
                400 kg, the vehicle is designed for efficient transportation of
                heavy cargo over uneven urban terrains. Its ease of charging and
                low maintenance make it a cost-effective investment for
                businesses of all sizes. Additionally, its quiet electric motor
                makes it an excellent option for indoor operations
              </p>
            </div>
            <div className="col-12 bike p-0 mt-4 mt-lg-0 d-flex justify-content-center">
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682419270/AUTONOID/model_kdoflq.jpg"
                alt="bike"
                className="img-fluid"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specification */}
      <div className="container-fluid">
        <div className="container">
          <div className="specification-heading px-3 lg-px-0">
            <h2>
              PRITH-EV M300 <span>(Technical Specification)</span>
            </h2>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352274/AUTONOID/line_gews69.png"
              alt=""
            />
          </div>
        </div>

        <div className="container mt-3">
          <div className="specification-list">
            <table className="table">
              <tbody className="table table-dark table-borderless">
                {specificationDetails.map((item, i) => {
                  return (
                    <tr data-aos="fade-up" data-aos-duration="1000" key={i}>
                      <td width={"25%"}>{item.title}</td>
                      <td>{item.desc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="container home-card">
        <div className="row py-4">
          <div className="col-lg-4 p-0">
            <div>
              <div className="card">
                <div className="card-body home-card-line">
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352275/AUTONOID/trusted-brand_pl29xo.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">
                    {" "}
                    Safe, Reliable, Cost effective EV for CARGO SOLUTIONS
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card">
              <div className="card-body home-card-line">
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352275/AUTONOID/quality-icon_zkd8up.png"
                  className="card-img-top"
                  alt="..."
                />
                <h5 className="card-title">
                  {" "}
                  Practical approach towards last mile transport problems
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card">
              <div className="card-body">
                <img
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352275/AUTONOID/seek-icon_ovpcvs.png"
                  className="card-img-top"
                  alt="..."
                />
                <h5 className="card-title">
                  {" "}
                  Solutions for Smooth transition to EV powered cargo handling
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container feature-section">
        <div className="feature-heading">
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682352274/AUTONOID/line_gews69.png"
            alt=""
            className="img-fluid"
          />
          <h2>FEATURES</h2>
        </div>

        <div className="row mt-4">
          <div
            className="col-lg-5 col-md-6 mx-lg-5 feature-box"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="feautre-number">
              <span>01</span>
            </div>
            <div className="feature-text">
              <p>Supports MII</p>
              <span>
                <ul>
                  <li>Make In INDIA</li>
                  <li>Local for Global 100% Swadeshi</li>
                </ul>
              </span>
            </div>
          </div>
          <div
            className="col-lg-5 mx-lg-5 col-md-6 mt-4 mt-lg-0 mt-md-0 feature-box"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="feautre-number">
              <span>02</span>
            </div>
            <div className="feature-text">
              <p>Ample Space and carrying capacity</p>
              <span>
                <ul>
                  <li>High Carrying Capacity upto 400kg</li>
                  <li>Good Riding Comfort</li>
                </ul>
              </span>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 mt-md-3 mx-lg-5 mt-4 feature-box"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="feautre-number">
              <span>03</span>
            </div>
            <div className="feature-text">
              <p>Zero Emission</p>
              <span>
                <ul>
                  <li>Eco Friendly - 300gm of Carbon not produced per km</li>
                  <li>Noise Free - No Sound Pollution</li>
                </ul>
              </span>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 mt-md-3 mx-lg-5 mt-4  feature-box"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="feautre-number">
              <span>04</span>
            </div>
            <div className="feature-text">
              <p>Customization</p>
              <span>
                <ul>
                  <li>To Suit business need</li>
                  <li>Good Riding Comfort</li>
                </ul>
              </span>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 mt-md-3 mx-lg-5 mt-4  feature-box"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="feautre-number">
              <span>05</span>
            </div>
            <div className="feature-text">
              <p>CAPEX</p>
              <span>
                <ul>
                  <li>Low (Initial Cost)</li>
                  <li>Low Maintenance Cost</li>
                  <li>Long Range - 120km</li>
                </ul>
              </span>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 mt-md-3 mx-lg-5 mt-4   feature-box"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="feautre-number">
              <span>06</span>
            </div>
            <div className="feature-text">
              <p>Digital Speedopmeter</p>
              <span>
                <ul>
                  <li>Push Button Start</li>
                  <li>Low battery Indicator</li>
                  <li>Vehicle Anti Theft Feature</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
