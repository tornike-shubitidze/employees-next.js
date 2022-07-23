import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { makeId } from "../config";

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
    <div className="d-flex flex-row sticky-top p-3 px-md-5 bg-dark text-white justify-content-md-between justify-content-center">
      <Link href={"/"}>
        <a className="my-auto d-none d-md-block">
          <img className="rounded" src="/logo.jpg" width={42} height={40} />
        </a>
      </Link>

      <nav className="my-2 my-md-0 mr-md-3">
        {navLinks.map((link, i) => {
          return (
            <Link
              key={makeId()}
              href={
                link.name === "Employees"
                  ? "/employees"
                  : link.name === "Feedback"
                  ? "/feedback"
                  : "/"
              }
            >
              <a
                className={`btn btn-${
                  link.isActive ? "primary" : "white"
                } text-white me-3`}
                onClick={(e) => setActive(e)}
              >
                {link.name}
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
