import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 ">
        <a href="" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3"></i>Hitabel
          </h1>
          {/* <!-- <img src="assets/img/logo.png" alt="Logo"> --> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link href="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link href="#" className="nav-item nav-link">
              About
            </Link>
            <Link href="#" className="nav-item nav-link">
              Service
            </Link>
            <Link href="#" className="nav-item nav-link">
              Menu
            </Link>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link href="#" className="dropdown-item">
                  Booking
                </Link>
                <Link href="#" className="dropdown-item">
                  Our Team
                </Link>
                <Link href="#" className="dropdown-item">
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="#" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link href="#" className="btn btn-primary py-2 px-4">
            Book A Table
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
