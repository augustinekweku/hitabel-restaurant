import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <Link href="/" className="navbar-brand p-0">
                {/* <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3"></i>Hitabel
          </h1> */}
                <img
                  src="assets/img/hitabel-logo.png"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    overflow: "visible",
                  }}
                  alt="Logo"
                />
              </Link>
              <p className="mt-3">
                Customer focused Restaurant, Bar & Pizza designed to de-stress
                Accra and beyond.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Company
              </h4>
              <a className="btn btn-link" href="#about">
                About Us
              </a>
              <a className="btn btn-link" href="#reservation">
                Contact Us
              </a>
              <a className="btn btn-link" href="#reservation">
                Reservation
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Contact
              </h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>Aviation Goil,
                Adenta, Madina
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+233 59 146 0146
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@hi-tabel.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://twitter.com/hitabelgh?lang=en"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.facebook.com/hitabelgh/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.instagram.com/hitabelgh/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Opening
              </h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p>09AM - 09PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Hitabel Restaurant
                </a>
                , All Right Reserved. Developed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  Nanitech
                </a>
                <br />
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu d-none">
                  <a href="#">Home</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
