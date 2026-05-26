import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    menuRef.current.style.right = "";
    setIsMenuOpen(false);
  }

  const handleLinkClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu();
  }

  return (

    <div className='navbar'>
      <img className='name' src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      
      {/* Overlay for mobile menu */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
      
      <ul ref={menuRef} className="nav-list">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor' href='#home'><p onClick={() => handleLinkClick("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor' offset={50} href='#about'><p onClick={() => handleLinkClick("about")}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor' offset={50} href='#achievements'><p onClick={() => handleLinkClick("achievements")}>Achievements</p></AnchorLink></li>
        <li><AnchorLink className='anchor' offset={50} href='#projects'><p onClick={() => handleLinkClick("projects")}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor' offset={50} href='#contact'><p onClick={() => handleLinkClick("contact")}>Contact</p></AnchorLink></li>
      </ul>

      <div className="contact"><AnchorLink className='anchor' offset={50} href='#footer'>Connect With Me</AnchorLink></div>

    </div>
  )
}

export default Navbar