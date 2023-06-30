import React, { useEffect } from "react";
import "./offering.css";
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
const Offering = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="container-fluid page-title">
        <h2>OUR OFFERING</h2>
        <p>HOME / OUR OFFERING </p>
      </div>

      <div className="container offering-section1">
        <h1>Electric Vehicles Business</h1>

        <div className="two-wheeler">
          <p>2 W Electric Cargo Scooter</p>
          <div className="row mt-4">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682420008/AUTONOID/two-wheeler_omwj4z.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>

      <div className="container why-prith">
        <h2>
          Why <span> &nbsp;PRITH-EV M300?</span>
        </h2>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6">
            <div>
              <div class="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682421580/AUTONOID/makeinindia_maju5e.png"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Support MII - <span>Local for Global 100% Swadeshi</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <div class="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682422041/AUTONOID/escooty1-transformed_lkc2bl.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">
                    OPEX - <span>Low Fuel Cost(Running Cost)</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <div class="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682422262/AUTONOID/low_yb3olx.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">
                    CAPEX - <span>LOW (Initial Cost)</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <div class="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682422336/AUTONOID/boxes_ghi6f8.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Ample Space,High Carrying Capacity upto-400Kg -{" "}
                    <span>Boxes,Baggage,etc.</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <div class="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682422408/AUTONOID/WhatsApp_Image_2023-04-21_at_12.12.55_PM_2_bkjawk.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Customization - <span>To suit business need.</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <div class="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682423030/AUTONOID/54363_g23djq.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Last mile Delivery -{" "}
                    <span>"Cargo and White Goods" Shipment</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <div class="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682422653/AUTONOID/zero_k1dtdg.jpg"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">Enviroment Friendly Choice</h5>
                  <ul>
                    <li>Eco Friendly - 300gm of Carbon not produced per km</li>
                    <li>Zero Emission</li>
                    <li>Noise Free - No Sound Pollution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <div class="card">
                {/* <img class="card-img-top" src="" alt="Card image cap" /> */}
                <div class="card-body">
                  <h5 class="card-title">Hassle Free Regular Running</h5>
                  <ul>
                    <li>Long Range - 120 km</li>
                    <li>Easy to Change</li>
                    <li>Comfortable Riding Position</li>
                    <li>Automatic Transmission</li>
                    <li>No Vehicle Stalling Issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <div class="card">
                {/* <img class="card-img-top" src="" alt="Card image cap" /> */}
                <div class="card-body">
                  <h5 class="card-title">Other Important Features</h5>
                  <ul>
                    <li>Push Button Start</li>
                    <li>Digital Speedometer</li>
                    <li>Low Battery Indicator</li>
                    <li>Vehicle Anti theft feature</li>
                    <li>Reverse Mode @5kmph</li>
                    <li>Detachable rear seat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container offeringspecification">
        <h2>Specification</h2>
        <div className="specification-list mt-4">
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

      <div className="container tempo">
        <div className="tempo-heading">
          <h2>3 W Electric tempo</h2>
        </div>
        <div className="tempo-img">
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1682436845/AUTONOID/WhatsApp_Image_2023-04-25_at_6.44.03_PM_mnicyb.jpg"
            alt=""
          />
          <div className="tempo-overlay">Coming Soon</div>
        </div>
      </div>

      <div className="container airport-heading mt-5 d-flex flex-column justify-content-center align-items-center text-center">
        <h2>Ground logistics, Patrol, Towing EVs (Airports, Public places)</h2>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684304415/Autonoid/threewheel_hkzfny.png"
          width={600}
          height={500}
          alt=""
        />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-6 d-flex justify-content-center">
            <img
              className="productclone"
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685288725/Autonoid/productclone5_lgckqp.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-6   d-flex justify-content-center">
            <img
              className="productclone"
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685288725/Autonoid/productclone4_csnuiy.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-6 d-flex justify-content-center">
            <img
              className="productclone"
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685288725/Autonoid/productclone2_i2dsp5.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3 col-6 d-flex justify-content-center">
            <img
              className="productclone"
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685288725/Autonoid/productclone1_d34qel.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="productcolnetitle">Our strength lies in in-house Concept to production Capacity</p>
        </div>
      </div>
      <div className="container extra-heading mt-5">
        <h2>Charging Infrastructure Business</h2>
      </div>
      <div className="container extra-heading mt-5">
        <h2>Non – Conventional power Business</h2>
      </div>
    </div>
  );
};

export default Offering;
