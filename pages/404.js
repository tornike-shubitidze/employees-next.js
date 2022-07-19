import Link from "next/link";

const errorPage = () => {
    return (<div>
        <h1> Page not found!</h1>
        <Link href='/'> Click here to go Home Page</Link>
    </div>
    )
}

export default errorPage;