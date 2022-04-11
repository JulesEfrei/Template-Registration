import { Link } from "react-router-dom"

import "../styles/NavBar.scss"

export default function NavBar() {

    return (

        <nav className="navbar">

            <div className="logo">
                <img src="./assets/logo.png" alt="Logo"/>
                <h1>Jules' Templates.</h1>
            </div>

            <div className="link-container">
                <a href="#">PRODUCTS</a>
                <a href="#">DOCS</a>
                <Link to="/" className="link">CONTACT ME</Link>
                <Link to="/" className="link">REGISTRER</Link>
            </div>

        </nav>

    )

}