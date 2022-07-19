import "bootstrap/dist/css/bootstrap.css"
import Link from 'next/link';

const url = 'https://test-task-api-optimo.herokuapp.com';

const employees = ({ employeesData }) => {
    return (
        <div>
            <h1> helloo employees</h1>
            {employeesData.map(((employee, i) => {
                return <div className="card" style={{ width: "15rem", background: i == 0 ? "blue" : i == 1 ? "green" : i == 2 ? "yellow" : "" }}
                    key={employee.id}>
                    <img src={`${url + employee.avatar}`} className="card-img-top" alt="employee-avatar" />
                    <div className="card-body">
                        <h5 className="card-title">{employee.name}</h5>
                        <p className="card-text">{employee.description}</p>
                        <p className="card-text">{employee.position}</p>
                        <p className="card-text">{employee.liked} 👍</p>
                        <Link href={`/employee/${employee.id}`} >View Profile</Link>
                    </div>
                </div>

            }))}
        </div>
    )
}

export const getStaticProps = async () => {
    let data = await fetch(url + "/employee");
    let employees = await data.json();

    return {
        props: {
            employeesData: employees
        }
    }
}

export default employees;