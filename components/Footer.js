import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-basic border-top mt-3">
      <footer>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-4 col-md-3">
              <h3>Services</h3>
              <ul className="list-inline ">
                <li className="list-block-item text-start px-0 ">
                  <Link href={"/"}>
                    <a>Web design</a>
                  </Link>
                </li>
                <li className="list-block-item text-start px-0 ">
                  <Link href={"/"}>
                    <a>Development</a>
                  </Link>
                </li>
                <li className="list-block-item text-start px-0">
                  <Link href={"/"}>
                    <a>Hosting</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4 col-md-3 ">
              <h3>About</h3>
              <ul className="list-inline">
                <li className="list-block-item text-start px-0">
                  <Link href={"/"}>
                    <a>Company</a>
                  </Link>
                </li>
                <li className="list-block-item text-start px-0">
                  <Link href={"/"}>
                    <a>Team</a>
                  </Link>
                </li>
                <li className="list-block-item text-start px-0">
                  <Link href={"/"}>
                    <a>Legacy</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4 col-md-3">
              <h3>Careers</h3>
              <ul className="list-inline">
                <li className="list-block-item text-start px-0">
                  <Link href={"/"}>
                    <a>Job openings</a>
                  </Link>
                </li>
                <li className="list-block-item text-start px-0">
                  <Link href={"/"}>
                    <a>Employee success</a>
                  </Link>
                </li>
                <li className="list-block-item text-start px-0">
                  <Link href={"/"}>
                    <a>Benefits</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-center col-lg-3 social pt-4 p-lg-0">
              <Link href={"/"}>
                <a>
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <i className="fa-brands fa-snapchat-square"></i>
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
