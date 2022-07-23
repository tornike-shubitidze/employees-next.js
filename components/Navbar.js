import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  let router = useRouter();
  let route = router.route;
  let [navLinks, setNavLinks] = useState([
    { name: "Home", isActive: route.includes("/") && route.length == 1 },
    {
      name: "Employees",
      isActive: route.includes("employee"),
    },
    { name: "Feedback", isActive: route.includes("feedback") },
  ]);

  let setActive = (e) => {
    let activeLink = navLinks.map((link) => {
      link.name === e.target.textContent
        ? (link.isActive = true)
        : (link.isActive = false);
      return link;
    });

    setNavLinks(activeLink);
  };

  return (
    <div className="navbar bg-dark justify-content-center sticky-top">
      <ul className="nav nav-pills my-4 ">
        {navLinks.map((link, i) => {
          return (
            <li className="nav-item mx-3" key={i}>
              <Link
                href={
                  link.name === "Employees"
                    ? "/employees"
                    : link.name === "Feedback"
                    ? "/feedback"
                    : "/"
                }
              >
                <a
                  className={`btn btn-${link.isActive ? "primary" : "warning"}`}
                  onClick={(e) => setActive(e)}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
