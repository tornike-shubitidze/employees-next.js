import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import style from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/employees">Employees</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/feedback">Feedback</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;