import { useState, useEffect } from "react";
import { Nav, MobileNav } from "./styles";
import Link from "next/link";
import { GrMenu, GrClose } from "react-icons/gr";

const Navbar = () => {
  const [navData, setNavData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);

  const fetchNavData = async () => {
    try {
      const response = await fetch("/api/navbar");
      const data = await response.json();
      setNavData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNavData();
  }, []);

  // onScroll Event Listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  //   Mobile Menu Listener
  const toggleMenu = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <Nav scroll={scrollPosition}>
      <Link href='/'>
        <a className='logo'>ICE DIGITAL</a>
      </Link>
      <div className='nav-container'>
        {navData.map((link) => (
          <Link key={link.id} href={link.url}>
            <a className='nav-item'>{link.title}</a>
          </Link>
        ))}
      </div>
      <GrMenu onClick={toggleMenu} />
      <MobileNav visible={mobileNav}>
        {navData.map((link) => (
          <Link key={link.id} href={link.url}>
            <a onClick={toggleMenu} className='nav-item'>
              {link.title}
            </a>
          </Link>
        ))}

        <GrClose onClick={toggleMenu} />
      </MobileNav>
    </Nav>
  );
};

export default Navbar;
