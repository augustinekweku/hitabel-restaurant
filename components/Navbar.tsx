import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className=" navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 pb-5">
        <div className="d-flex justify-content-between w-100 container my-4">
          <Link href="/" className="navbar-brand p-0">
            {/* <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3"></i>Hitabel
          </h1> */}
            <img
              src="assets/img/hitabel-logo.png"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                overflow: "visible",
              }}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse mt-5 mt-lg-0"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link href="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link href="#about" className="nav-item nav-link">
              About
            </Link>

            <Link href="#menu" className="nav-item nav-link">
              Menu
            </Link>
            <div className="nav-item dropdown d-none">
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
          </div>
          <Link
            href="#reservation"
            className="btn btn-primary py-2 px-4 text-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
