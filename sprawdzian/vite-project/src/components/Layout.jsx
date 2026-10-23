import { Link, Outlet, NavLink } from "react-router-dom"
import Footer from "./Footer"

export default function Layout() {
    return <>
        <nav className="navbar navbar-expand bg-body-tertiary border-bottom">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Katalog Warzyw</Link>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Katalog Warzyw</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add">Dodaj</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
        <Footer />
    </>
}

