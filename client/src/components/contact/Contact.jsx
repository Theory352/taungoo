import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const mapUrl =
    "https://www.google.com/maps/place/University+of+Computer+Studies+(Taungoo)/@18.9749407,96.4166245,17z/data=!3m1!4b1!4m6!3m5!1s0x30c5d8ae692c8389:0x5e6a5c4f57dd5e05!8m2!3d18.9749407!4d96.4166245!16s%2Fg%2F11c526n0kd?entry=ttu";
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              title="My Location"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              src={mapUrl}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Myanmar Bago Taungoo</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> capeloise324@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +95 9 404453209 </p>
              </div>
            </div>

            <form>
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" placeholder="Create a message here..." rows="10">
                
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
