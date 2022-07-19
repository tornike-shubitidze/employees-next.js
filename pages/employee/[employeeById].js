import { useRouter } from "next/router";


const url = 'https://test-task-api-optimo.herokuapp.com';

const employeeById = ({ employeeData }) => {
    // const router = useRouter();
    // const { employeeById } = router.query;
    console.log(employeeData);

    return (<div>
        <h1> Hello {employeeData.name} </h1>
        <div className="card" style={{ width: "30rem", background: "green" }}>
            <img src={`${url + employeeData.avatar}`} className="card-img-top" alt="employee-avatar" />
            <div className="card-body">
                <h5 className="card-title">{employeeData.name}</h5>
                <p className="card-text">{employeeData.description}</p>
                <p className="card-text">{employeeData.position}</p>
                <p className="card-text">{employeeData.liked} 👍</p>
            </div>
        </div>

    </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(url + '/employee')
    const users = await res.json()

    const paths = users.map((user) => ({
        params: { employeeById: user.id.toString() },
    }))

    return { paths, fallback: false }
}


export const getStaticProps = async ({ params }) => {
    let res = await fetch(url + `/employee/${params.employeeById}`);
    let employee = await res.json();

    return {
        props: {
            employeeData: employee
        }
    }
}

export default employeeById;