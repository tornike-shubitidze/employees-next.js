import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
// import style from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div className="navbar bg-dark justify-content-center sticky-top">
      <ul className="nav nav-pills my-4 ">
        <li className="nav-item mx-3">
          <Link className="nav-link active " aria-current="page" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" href="/employees">
            Employees
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" href="/feedback">
            Feedback
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
