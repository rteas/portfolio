import "./navbar.scss";

export default function NavBar() {
    return <nav role="navigation" className="navbar">
        <span>
            Richy Teas
        </span>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>

}