import ActiveLink from "../ActiveLink/ActiveLink";

const menuRoutes = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Favorites',
        href: '/favorites'
    }
];

export default function NavBar ({ className }) {
    return (
        <nav className={className}>
            {menuRoutes.map(route => (
                <ActiveLink key={route.href} href={route.href} className="nav-link" text={route.text}/>
            ))}
        </nav>
    );
}