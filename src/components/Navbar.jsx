import useScrollPosition from "@hooks/useScrollPosition";
import NavItem from "@components/NavItem.jsx";

const Navbar = () => {
    const scrollPosition = useScrollPosition();
    const navItems = [
        { route: "/", value: "Home" },
        { route: "/about", value: "About" },
        { route: "/pages", value: "Pages" },
        { route: "/services", value: "Services" },
        { route: "/team", value: "Team" },
        { route: "/blog", value: "Blog" },
        { route: "/contact", value: "Contact" },
    ];

    return (
        <nav
            className={`navbar navbar-expand-lg position-sticky top-0 bg-white ${
                scrollPosition > 0 ? "shadow-sm" : ""
            }`}
        >
            <a href="#" className="navbar-brand" style={{ marginLeft: "30px" }}>
                <img src="/images/logo-black.webp" alt="Logo Black" />
            </a>
            <button
                class="navbar-toggler m-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <img src="/images/hamburgerIcon.webp" alt="Hamburger Icon" />
            </button>

            <div
                className="collapse navbar-collapse justify-content-around"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav text-uppercase">
                    {navItems.map((item, index) => (
                        <NavItem item={item} key={index} />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

/**
 * 
 * 
 *                         {menuItems.map((item, index) => (
                            <NavItem item={item} key={index} />
                        ))}
 */

export default Navbar;
