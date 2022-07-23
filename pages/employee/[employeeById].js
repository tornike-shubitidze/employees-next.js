import { useState } from "react";
import { URL } from "../../config";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

const employeeById = ({ employeeData }) => {
  let [likeCount, setLikeCount] = useState(employeeData.employeeInfo.liked);

  let jobPosition = employeeData.jobs.find(
    (job) => job.id === employeeData.employeeInfo.job_id
  );

  let location = employeeData.locations.find(
    (location) => location.id === employeeData.employeeInfo.location_id
  );

  let giveLike = () => {
    fetch(URL + `/employee/${employeeData.employeeInfo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Update Employee Like Amount" }),
    })
      .then((response) => response.json())
      .then((data) => setLikeCount(data.liked))
      .catch(() => {
        NotificationManager.error("Something Went Wrong!", "Error", 3000);
      });
  };

  console.log(employeeData.employeeInfo);
  return (
    <div className="container d-flex justify-content-center my-5 col-lg-4">
      <div className="card bg-primary col-lg-9">
        <img
          src={`${URL + employeeData.employeeInfo.avatar}`}
          className="card-img-top"
          alt="employee-avatar"
        />
        <div className="card-body">
          <div className="d-flex align-items-center gap-3 mb-2">
            <span>
              <b>Name: </b>
            </span>
            <h5 className="card-title m-0">{employeeData.employeeInfo.name}</h5>
          </div>
          <div className="d-flex align-items-center gap-3 mb-2">
            <span>
              <b>Position: </b>
            </span>
            <p className="card-text m-0">{jobPosition.name}</p>
          </div>
          <div className="d-flex align-items-center gap-3 mb-2">
            <span>
              <b>Description: </b>
            </span>
            <p className="card-text m-0">
              {employeeData.employeeInfo.description}
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 mb-2">
            <span>
              <b>Location: </b>
            </span>
            <p className="card-text m-0">{location.name}</p>
          </div>
          <div className="d-flex align-items-center gap-3 mb-3">
            <span>
              <b>Likes: </b>
            </span>
            <h5 className="card-text m-0">{likeCount}</h5>
          </div>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => giveLike()}
          >
            Give Like <i className="fa-solid fa-thumbs-up text-warning " />
          </button>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${URL}/employee`);
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { employeeById: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  return await Promise.all([
    fetch(`${URL}/employee/${params.employeeById}`),
    fetch(`${URL}/location`),
    fetch(`${URL}/job`),
  ])
    .then(async ([employee, location, job]) => {
      const employeeInfo = await employee.json();
      const locations = await location.json();
      const jobs = await job.json();

      return {
        props: {
          employeeData: { employeeInfo, locations, jobs },
        },
      };
    })
    .catch(() => {
      NotificationManager.error("Something Went Wrong!", "Error", 3000);

      return {
        props: {
          employeesData: [],
        },
      };
    });
};

export default employeeById;
