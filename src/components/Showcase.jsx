import './Showcase.css';

const Showcase = () => {
  return (
    <section className="showcase full-width">
      <div className="container-fluid p-0">
        {/* First Row */}
        <div className="row g-0">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{
              backgroundImage: "url('https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/src/assets/img/bg-showcase-1.jpg?raw=true')",
            }}
          ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Fully Responsive Design</h2>
            <p className="lead mb-0">
              When you use a theme created by Start Bootstrap, you know that
              the theme will look great on any device, whether its a phone,
              tablet, or desktop. The page will behave responsively!
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="row g-0">
          <div
            className="col-lg-6 text-white showcase-img"
            style={{
              backgroundImage: "url('https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/src/assets/img/bg-showcase-2.jpg?raw=true')",
            }}
          ></div>
          <div className="col-lg-6 my-auto showcase-text">
            <h2>Updated For Bootstrap 5</h2>
            <p className="lead mb-0">
              Newly improved, and full of great utility classes, Bootstrap 5 is
              leading the way in mobile responsive web development! All of the
              themes on Start Bootstrap are now using Bootstrap 5!
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="row g-0">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{
              backgroundImage: "url('https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/src/assets/img/bg-showcase-3.jpg?raw=true')",
            }}
          ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Easy to Use & Customize</h2>
            <p className="lead mb-0">
              Landing Page is just HTML and CSS with a splash of SCSS for users
              who demand some deeper customization options. Out of the box, just
              add your content and images, and your new landing page will be
              ready to go!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
