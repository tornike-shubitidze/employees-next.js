import { useRouter } from "next/router";
import { URL } from "../../config";

const employeeById = ({ employeeData }) => {
  // const router = useRouter();
  // const { employeeById } = router.query;
  let jobPosition = employeeData.jobs.find(
    (job) => job.id === employeeData.employeeInfo.job_id
  );
  let location = employeeData.locations.find(
    (location) => location.id === employeeData.employeeInfo.location_id
  );

  console.log(employeeData);
  console.log("location:", jobPosition);
  return (
    <div className="d-grid justify-content-center">
      <h1> Hello {employeeData.employeeInfo.name} </h1>
      <div className="card bg-primary w-100">
        <img
          src={`${URL + employeeData.employeeInfo.avatar}`}
          className="card-img-top"
          alt="employee-avatar"
        />
        <div className="card-body">
          <h5 className="card-title">{employeeData.employeeInfo.name}</h5>
          <p className="card-text">{employeeData.employeeInfo.position}</p>
          <p className="card-text">{employeeData.employeeInfo.description}</p>
          <p className="card-text">{jobPosition.name}</p>
          <p className="card-text">{location.name}</p>
          <h2 className="card-text">
            {employeeData.employeeInfo.liked}{" "}
            <i className="fa-solid fa-thumbs-up text-warning "></i>
          </h2>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(URL + "/employee");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { employeeById: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  return await Promise.all([
    fetch(URL + `/employee/${params.employeeById}`),
    fetch(URL + "/location"),
    fetch(URL + "/job"),
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
    .catch((err) => {
      alert("error: ", err);

      return {
        props: {
          employeesData: [],
        },
      };
    });
};

export default employeeById;
