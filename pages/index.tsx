import Head from "next/head";
import { Inter } from "next/font/google";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";
import FoodMenu from "@/components/FoodMenu";
import AboutUsImageGallery from "@/components/AboutUsImageGallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi-Tabel Restaurant & Sky Bar</title>
        <meta
          name="description"
          content="Customer focused Restaurant, Bar & Pizza designed to de-stress Accra and beyond."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          {/* <!-- Spinner Start s --> */}
          {/* <div
            id="spinner"
            className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          >
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div> */}
          {/* <!-- Spinner End --> */}

          {/* <!-- Navbar & Hero Start --> */}
          <div className=" position-relative p-0">
            <div className="py-5 bg-dark hero-header mb-5">
              <div className="container my-5 py-5">
                <div className="row align-items-center g-5 mt-5">
                  <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-3 text-white animated slideInLeft">
                      Enjoy Our
                      <br />
                      Delicious Meal
                    </h1>
                    <p className="text-white fs-3 animated slideInLeft mb-4 pb-2">
                      Customer focused Restaurant, Bar & Pizza designed to
                      de-stress Accra and beyond.
                    </p>
                    <a
                      href="#reservation"
                      className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      Book A Table
                    </a>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img
                      className="img-fluid"
                      src="assets/img/hero.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Navbar & Hero End --> */}

          {/* <!-- About Start --> */}
          <section id="about">
            <div className="container-xxl py-5">
              <div className="container">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6">
                    <AboutUsImageGallery />
                  </div>
                  <div className="col-lg-6">
                    <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                      About Us
                    </h5>
                    <h1 className="mb-4">
                      Welcome to{" "}
                      <i className="fa fa-utensils text-primary me-2"></i>
                      Hi-Tabel
                    </h1>
                    <p className="mb-4">
                      Welcome to our customer-focused Restaurant, Bar & Pizza, a
                      haven designed to de-stress Accra and beyond. Our
                      establishment is dedicated to providing a relaxing and
                      enjoyable escape from the hustle and bustle of everyday
                      life. With a team of master chefs crafting exquisite
                      dishes, a bar offering a wide selection of refreshing
                      beverages, and a pizza menu that tantalizes the taste
                      buds, we cater to every craving.
                    </p>
                    <p className="mb-4">
                      Our inviting ambiance and exceptional service ensure that
                      every visit is a memorable experience, whether you&apos;re
                      here for a casual meal, a special celebration, or simply
                      to unwind with friends. Join us and discover the perfect
                      place to relax and savor the moment.
                    </p>
                    <div className="row g-4 mb-4">
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                          <h1
                            className="flex-shrink-0 display-5 text-primary mb-0"
                            data-toggle="counter-up"
                          >
                            5
                          </h1>
                          <div className="ps-4">
                            <p className="mb-0">Years of</p>
                            <h6 className="text-uppercase mb-0">Experience</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                          <h1
                            className="flex-shrink-0 display-5 text-primary mb-0"
                            data-toggle="counter-up"
                          >
                            4
                          </h1>
                          <div className="ps-4">
                            <p className="mb-0">Popular</p>
                            <h6 className="text-uppercase mb-0">
                              Master Chefs
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- About End --> */}

          {/* <!-- Menu Start --> */}
          <section id="menu">
            <FoodMenu />
          </section>

          {/* <!-- Service Start --> */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-4">
                <div className=" col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="service-item  pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                      <h5>Master Chefs</h5>
                      <p>
                        Our restaurant is proud to feature a team of master
                        chefs who bring their extensive culinary expertise and
                        creativity to every dish. Each chef has years of
                        experience and a passion for food that shines through in
                        their innovative cooking techniques and presentation.
                        They continuously refine their skills and stay updated
                        with the latest trends in the culinary world, ensuring
                        that every meal served is a masterpiece. Our chefs&apos;
                        dedication to excellence and their commitment to using
                        the finest ingredients guarantee an unforgettable dining
                        experience for our guests.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="service-item  pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                      <h5>Quality Food</h5>
                      <p>
                        At our restaurant, quality is not just a promise;
                        it&apos;s a standard. We source the freshest ingredients
                        from trusted local farmers and suppliers to ensure that
                        every dish is made with the highest quality produce. Our
                        commitment to quality extends to every aspect of our
                        food, from the meticulous preparation to the final
                        presentation. We believe that great food starts with
                        great ingredients, and our team takes the time to select
                        and use only the best. Each bite is a testament to our
                        dedication to providing our guests with exceptional
                        flavors and a dining experience that exceeds
                        expectations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="service-item  pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-star text-primary mb-4"></i>
                      <h5>Inviting Ambiance</h5>
                      <p>
                        We believe that the dining experience goes beyond just
                        the food on your plate. Our restaurant offers an
                        inviting ambiance that enhances your overall experience.
                        From the elegant décor to the comfortable seating and
                        warm lighting, every detail is designed to create a
                        relaxing and enjoyable atmosphere. Whether you&apos;re
                        here for a romantic dinner, a family celebration, or a
                        business meeting, our ambiance sets the perfect stage
                        for any occasion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="service-item  pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                      <h5>Exceptional Service</h5>
                      <p>
                        At our restaurant, exceptional service is at the heart
                        of what we do. Our friendly and attentive staff are
                        dedicated to making your visit memorable. From the
                        moment you walk in, you&apos;ll be greeted with a smile
                        and treated with the utmost care. Our team is trained to
                        anticipate your needs and provide personalized service,
                        ensuring that every aspect of your dining experience is
                        seamless and enjoyable. We take pride in going above and
                        beyond to make sure you feel valued and appreciated as
                        our guest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Service End --> */}

          {/* <!-- Menu End --> */}
          <section id="reservation">
            <Reservation />
          </section>

          <Footer />

          <a
            href="#"
            className="btn btn-lg btn-primary btn-lg-square back-to-top"
          >
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
      </main>
    </>
  );
}
