import ActiveLink from "../ActiveLink/ActiveLink";


export default function NavBar (props) {
    return (
        <nav className={props.className}>
            <ActiveLink directTo="/" className="nav-link" text="Home"/>
            <ActiveLink directTo="/about" className="nav-link" text="About"/>
            <ActiveLink directTo="/contact" className="nav-link" text="Contact"/>
        </nav>
    );
}