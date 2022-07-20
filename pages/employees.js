import { URL } from "../config";
import Link from "next/link";
import { useState } from "react";

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
    <div className="d-grid justify-content-center my-5">
      <div className="d-flex mb-5 justify-content-between">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
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
            <li onClick={() => setLocationDropdown({})} key={1111111}>
              Remove Filter
            </li>
            {employeesData.locations.map((location, i) => (
              <li onClick={() => setLocationDropdown(location)} key={i}>
                {location.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            onClick={() => setPositionDropdownIsOpen(!positionDropdownIsOpen)}
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {position.name ? position.name : "Position By Location"}
          </button>
          <ul
            className={`dropdown-menu list-group d-${
              positionDropdownIsOpen ? "block" : "none"
            }`}
            aria-labelledby="dropdownMenuButton1"
          >
            <li onClick={() => setPositionDropdown({})} key={2222222}>
              Remove Filter
            </li>
            {employeesData.jobs.map((job, i) => (
              <li onClick={() => setPositionDropdown(job)} key={i}>
                {job.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
      {dataByPosition.map((employee, i) => {
        return (
          <div
            className={`card mb-3 bg-${
              i == 0
                ? "primary"
                : i == 1
                ? "success"
                : i == 2
                ? "warning"
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
              <Link href={`/employee/${employee.id}`}>View Profile</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  return await Promise.all([
    fetch(URL + "/employee"),
    fetch(URL + "/location"),
    fetch(URL + "/job"),
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
