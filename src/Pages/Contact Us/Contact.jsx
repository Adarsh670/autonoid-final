import React, { useEffect } from "react";
import "./contact.css";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="container-fluid page-title">
          <h2>CONTACT US</h2>
          <p>HOME / CONTACT US </p>
        </div>
        <div className="container contact-details">
          <div className="row">
            <div className="col-lg-5">
              <p className="contact-text">Information</p>
              <div className="contact-box">
                <div className="contact-detail-box">
                  <div className="contact-detail-icon">
                    <AiOutlineHome />
                  </div>
                  <div className="contact-detail-text">
                    <p>Global Headquarters :</p>
                    <span>
                      Plot no 16, Vikash Nagar Industrial Area Meerut Road
                      (Ghaziabad)
                    </span>
                  </div>
                </div>

                <div className="contact-detail-box">
                  <div className="contact-detail-icon">
                    <HiOutlineMail />
                  </div>
                  <div className="contact-detail-text">
                    <p>Email :</p>
                    <span>info@AUTONOID.co.in</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <p className="contact-text">Get In Touch</p>
              <div className="contact-form">
                <form action="https://formspree.io/f/xvondgnq" method="POST">
                  <div>
                    <input type="text" name="text" placeholder="Name" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <input type="text" name="number" placeholder="Phone" />
                    <input type="text" name="city" placeholder="City" />
                  </div>

                  <textarea
                    name="message"
                    placeholder="message"
                    rows="7"
                    cols="50"
                  ></textarea>
                  <button type="submit" className="form-btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
