import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <div className="footer-basic border-top mt-3">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul className="list-inline">
                <li className="list-block-item text-start px-0">
                  <a href="/">Web design</a>
                </li>
                <li className="list-block-item text-start px-0">
                  <a href="/">Development</a>
                </li>
                <li className="list-block-item text-start px-0">
                  <a href="/">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul className="list-inline">
                <li className="list-block-item text-start px-0">
                  <a href="/">Company</a>
                </li>
                <li className="list-block-item text-start px-0">
                  <a href="/">Team</a>
                </li>
                <li className="list-block-item text-start px-0">
                  <a href="/">Legacy</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul className="list-inline">
                <li className="list-block-item text-start px-0">
                  <a href="/">Job openings</a>
                </li>
                <li className="list-block-item text-start px-0">
                  <a href="/">Employee success</a>
                </li>
                <li className="list-block-item text-start px-0">
                  <a href="/">Benefits</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-snapchat-square"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
