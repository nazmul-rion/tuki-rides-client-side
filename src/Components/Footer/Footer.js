import React from "react";
// import "./Footer.css";
import FooterLogo from "../../images/logo.png";
import masterCard from "../../images/paymentGatWay/payment-master-card.png";
import visaCard from "../../images/paymentGatWay/payment-visa-card.png";
import skrillCard from "../../images/paymentGatWay/payment-skrill-card.png";
import stripeCard from "../../images/paymentGatWay/payment-stripe-card.png";
import discoverCard from "../../images/paymentGatWay/payment-discover-card.png";
const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "black" }}>
      <div className="row mx-5 py-5">
        <div className="col-lg-4 m-2">
          <div className="d-flex align-items-center mb-3">
            <img
              width="80px"
              src={FooterLogo}
              alt="brand name"
              className="img-fluid logo-size"
            />
          </div>
          <p>
            FastDrive is a cutting-edge React CAR Selling project template. The
            latest version of the Bootstrap framework powers this stunning web
            design, which includes many eye-catching elements that engage
            visitors instantly.
          </p>
          <div>
            <h1>Follow Us:</h1>
            <div className="mt-3 fw-bold fs-3 icon-color d-flex gap-4">
              <a
                href="https://www.facebook.com/nayem.islam.16752"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square "></i>
              </a>
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter "></i>
              </a>
              <a
                href="https://www.linkedin.com/in/md-nayem-hossain-937052193/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin "></i>
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col m-2">
          <h2 className="mb-4">Contacts Us</h2>
          <h6>
            <i className="fas fa-map-marker-alt"></i> 4967 Sardis Sta, Victoria
            8007, Montreal.
          </h6>
          <h6>
            <i className="fas fa-phone-alt"></i> +1 246-345-0695
          </h6>
          <h6>
            <i className="fas fa-paper-plane"></i> fastautoPro-drive@gmail.com
          </h6>
        </div>

        <div className="col m-2 ms-lg-5">
          <h2 className="mb-4">Supports</h2>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Our Blogs</p>
          <p>Terms And Conditions</p>
        </div>

        <div className="col m-2">
          <h2 className="mb-4">We Accepts</h2>
          <div className="g-4">
            <img src={masterCard} alt="" className="img-fluid me-2 my-2" />
            <img src={visaCard} alt="" className="img-fluid me-2 my-2" />
            <img src={skrillCard} alt="" className="img-fluid me-2 my-2" />
            <img src={stripeCard} alt="" className="img-fluid me-2 my-2" />
            <img src={discoverCard} alt="" className="img-fluid my-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
