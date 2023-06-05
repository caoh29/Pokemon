import ActiveLink from "../ActiveLink/ActiveLink";

const menuRoutes = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    }
];

export default function NavBar (props) {
    return (
        <nav className={props.className}>
            {menuRoutes.map(route => (
                <ActiveLink key={route.href} href={route.href} className="nav-link" text={route.text}/>
            ))}
        </nav>
    );
}