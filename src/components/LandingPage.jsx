import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp";
import ImageGrid from "./ImageGrid";
import "bootstrap-icons/font/bootstrap-icons.css";
import Showcase from './Showcase'; 

{/* Navbar */}
const Navbar = () => (
  <nav className="navbar bg-light full-width">
    <div className="container-fluid">
      <h2 className="navbar-brand" href="#home">
        Start Bootstrap
      </h2>
      <form className="d-flex ms-auto">
        <button className="btn btn-primary sup" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  </nav>
);

{/* Footer */}
const Footer = () => (
  <footer className="footer bg-light text-center">
    <div className="container">
      <div className="row">
        {/* Left side of the footer */}
        <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
          <ul className="list-inline mb-2">
            <li className="list-inline-item"><a href="#!">About</a></li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item"><a href="#!">Contact</a></li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
          </ul>
          <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2024. All Rights Reserved.</p>
        </div>
        {/* Right side of the footer */}
        <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-4">
              <a href="#!"><i className="bi-facebook fs-3"></i></a>
            </li>
            <li className="list-inline-item me-4">
              <a href="#!"><i className="bi-twitter fs-3"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="#!"><i className="bi-instagram fs-3"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => (
  <div className="full-width">
    <Navbar />
    <SignUp
      className="lead-section-top"
      heading="Generate more leads with a professional landing page!"
    />

    <div className="container py-5 full-width">
      {/* Feature Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-4 col-md-6 d-flex justify-content-center">
          <ImageGrid
            iconClass="bi-window"
            heading="Fully Responsive"
            description="This theme will look great on any device, no matter the size!"
          />
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center">
          <ImageGrid
            iconClass="bi-layers"
            heading="Bootstrap 5 Ready"
            description="Featuring the latest build of the new Bootstrap 5 framework!"
          />
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center">
          <ImageGrid
            iconClass="bi-terminal"
            heading="Easy to Use"
            description="Ready to use with your own content, or customize the source files!"
          />
        </div>
      </div>

      {/* Showcase Section */}
      <Showcase />

      {/* Testimonial Section */}
      <div className="row justify-content-center text-center">
        <div className="d-flex justify-content-center text">
          <h3>What people are saying...</h3>
        </div>
        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center mb-4">
          <ImageGrid
            imageSrc="https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/src/assets/img/testimonials-1.jpg?raw=true"
            heading="Margaret E."
            description="This is fantastic! Thanks so much guys"
            imgClass="rounded-circle shadow-sm"
          />
        </div>
        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center mb-4">
          <ImageGrid
            imageSrc="https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/src/assets/img/testimonials-2.jpg?raw=true"
            heading="Fred S."
            description="Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
            imgClass="rounded-circle shadow-sm"
          />
        </div>
        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center mb-4">
          <ImageGrid
            imageSrc="https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/src/assets/img/testimonials-3.jpg?raw=true"
            heading="Sarah W."
            description="Thanks so much for making these free resources available to us!."
            imgClass="rounded-circle shadow-sm"
          />
        </div>
      </div>
    </div>

    <SignUp
      className="lead-section-bottom"
      heading="Ready to get started? Sign up now!"
    />
    <Footer />
  </div>
);

export default LandingPage;
