import { URL } from "../config";
import Link from "next/link";
import { useState } from "react";
import { makeId } from "../config";

const employees = ({ employeesData }) => {
  let [locationDropdownIsOpen, setlocationDropdownIsOpen] = useState(false);
  let [location, setLocation] = useState({});
  let [positionDropdownIsOpen, setPositionDropdownIsOpen] = useState(false);
  let [position, setPosition] = useState({});

  let setLocationDropdown = ({ name, id }) => {
    if (name == undefined || id == undefined) {
      setLocation({});
    } else {
      setLocation({ name, id });
    }
    setlocationDropdownIsOpen(!locationDropdownIsOpen);
  };

  let setPositionDropdown = ({ name, id }) => {
    if (name == undefined || id == undefined) {
      setPosition({});
    } else {
      setPosition({ name, id });
    }
    setPositionDropdownIsOpen(!positionDropdownIsOpen);
  };

  let dataByLocation =
    Object.keys(location).length !== 0
      ? employeesData.employees.filter(
          (employee) => employee.location_id == location.id
        )
      : employeesData.employees;

  let dataByPosition =
    Object.keys(position).length !== 0
      ? dataByLocation.filter((job) => job.job_id == position.id)
      : dataByLocation;

  return (
    // <div class="container">

    //   <div class="card-deck mb-3">
    //     <div class="card mb-4 box-shadow">
    //       <div class="card-header">
    //         <h4 class="my-0 font-weight-normal">Free</h4>
    //       </div>
    //       <div class="card-body">
    //         <h1 class="card-title pricing-card-title">
    //           $0 <small class="text-muted">/ mo</small>
    //         </h1>
    //         <ul class="list-unstyled mt-3 mb-4">
    //           <li>10 users included</li>
    //           <li>2 GB of storage</li>
    //           <li>Email support</li>
    //           <li>Help center access</li>
    //         </ul>
    //         <button
    //           type="button"
    //           class="btn btn-lg btn-block btn-outline-primary"
    //         >
    //           Sign up for free
    //         </button>
    //       </div>
    //     </div>
    //     <div class="card mb-4 box-shadow">
    //       <div class="card-header">
    //         <h4 class="my-0 font-weight-normal">Pro</h4>
    //       </div>
    //       <div class="card-body">
    //         <h1 class="card-title pricing-card-title">
    //           $15 <small class="text-muted">/ mo</small>
    //         </h1>
    //         <ul class="list-unstyled mt-3 mb-4">
    //           <li>20 users included</li>
    //           <li>10 GB of storage</li>
    //           <li>Priority email support</li>
    //           <li>Help center access</li>
    //         </ul>
    //         <button type="button" class="btn btn-lg btn-block btn-primary">
    //           Get started
    //         </button>
    //       </div>
    //     </div>
    //     <div class="card mb-4 box-shadow">
    //       <div class="card-header">
    //         <h4 class="my-0 font-weight-normal">Enterprise</h4>
    //       </div>
    //       <div class="card-body">
    //         <h1 class="card-title pricing-card-title">
    //           $29 <small class="text-muted">/ mo</small>
    //         </h1>
    //         <ul class="list-unstyled mt-3 mb-4">
    //           <li>30 users included</li>
    //           <li>15 GB of storage</li>
    //           <li>Phone and email support</li>
    //           <li>Help center access</li>
    //         </ul>
    //         <button type="button" class="btn btn-lg btn-block btn-primary">
    //           Contact us
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container d-block">
      <div className="d-flex justify-content-center mt-3">
        <div className="dropdown me-5 ">
          <button
            className="btn btn-primary dropdown-toggle"
            onClick={() => setlocationDropdownIsOpen(!locationDropdownIsOpen)}
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {location.name ? location.name : "Filter By Location"}
          </button>
          <ul
            className={`dropdown-menu list-group d-${
              locationDropdownIsOpen ? "block" : "none"
            } `}
            aria-labelledby="dropdownMenuButton1"
          >
            <li
              className="dropdown-item"
              onClick={() => setLocationDropdown({})}
              key={makeId()}
            >
              Remove Filter
            </li>
            {employeesData.locations.map((location, i) => (
              <li
                className="dropdown-item"
                onClick={() => setLocationDropdown(location)}
                key={i}
              >
                {location.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            onClick={() => setPositionDropdownIsOpen(!positionDropdownIsOpen)}
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {position.name ? position.name : "Filter By Position"}
          </button>
          <ul
            className={`dropdown-menu list-group d-${
              positionDropdownIsOpen ? "block" : "none"
            }`}
            aria-labelledby="dropdownMenuButton1"
          >
            <li
              className="dropdown-item"
              onClick={() => setPositionDropdown({})}
              key={makeId()}
            >
              Remove Filter
            </li>
            {employeesData.jobs.map((job, i) => (
              <li
                className="dropdown-item"
                onClick={() => setPositionDropdown(job)}
                key={i}
              >
                {job.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" justify-content-between mt-5">
        <div className="row m-auto">
          {dataByPosition.map((employee, i) => {
            return (
              <div key={makeId()} className="col-md-4 ">
                <div
                  className={`card mb-5 bg-${
                    i == 0
                      ? "primary"
                      : i == 1
                      ? "success"
                      : i == 2
                      ? "info"
                      : "white"
                  }`}
                  key={employee.id}
                >
                  <img
                    src={`${URL + employee.avatar}`}
                    className="card-img-top"
                    alt="employee-avatar"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{employee.name}</h5>
                    <p className="card-text">{employee.description}</p>
                    <p className="card-text">{employee.position}</p>
                    <p className="card-text">
                      {employee.liked}
                      <i className="fa-solid fa-thumbs-up text-warning fa-2x ms-2"></i>
                    </p>
                    <Link href={`/employee/${employee.id}`}>
                      <a className="btn btn-danger">View Profile</a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return await Promise.all([
    fetch(`${URL}/employee`),
    fetch(`${URL}/location`),
    fetch(`${URL}/job`),
  ])
    .then(async ([employee, location, job]) => {
      const employees = await employee.json();
      const locations = await location.json();
      const jobs = await job.json();

      return {
        props: {
          employeesData: { employees, locations, jobs },
        },
      };
    })
    .catch((err) => {
      alert("error: ", err);

      return {
        props: {
          employeesData: [],
        },
      };
    });
};

export default employees;
