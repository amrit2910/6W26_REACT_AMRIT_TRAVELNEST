export default function About() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4">About Us</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">About</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
      {/* About Start */}
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div
                className="h-100"
                style={{
                  border: "50px solid",
                  borderColor: "transparent #13357B transparent #13357B"
                }}
              >
                <img
                  src="img/about-img.jpg"
                  className="img-fluid w-100 h-100"
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-7"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.86)), url(img/about-img-1.png)"
              }}
            >
              <h5 className="section-about-title pe-3">About Us</h5>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">TravelNest</span>
              </h1>
              <p className="mb-4">
                TourismHub is a modern travel platform designed to help travelers discover beautiful destinations, compare travel options, and plan memorable trips. Our goal is to make travel planning simple, convenient, and enjoyable for everyone.
              </p>
              <p className="mb-4">
               Whether you're looking for a weekend escape, a family vacation, or an adventure with friends, TourismHub provides all the information you need in one place.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    First Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />5 Star
                    Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    150 Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    24/7 Service
                  </p>
                </div>
              </div>
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Travel Guide Start */}
      <div className="container-fluid guide py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Travel Guide</h5>
            <h1 className="mb-0">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="img/guide-1.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="img/guide-2.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="img/guide-3.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="img/guide-4.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Travel Guide End */}
      {/* Subscribe Start */}
      <div className="container-fluid subscribe py-5">
        <div className="container text-center py-5">
          <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
            <h5 className="subscribe-title px-3">Subscribe</h5>
            <h1 className="text-white mb-4">Our Newsletter</h1>
            <p className="text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              tempore nam, architecto doloremque velit explicabo? Voluptate sunt
              eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
              repellat a laborum quasi.
            </p>
            <div className="position-relative mx-auto">
              <input
                className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Subscribe End */}
    </>

  )
}