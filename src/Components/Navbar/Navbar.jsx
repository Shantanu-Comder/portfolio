import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (

    <div className='navbar'>
      <img className='name' src={logo} alt=""/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-list">

        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor' offset={50} href='#achievements'><p onClick={()=>setMenu("achievements")}>Achievements</p></AnchorLink></li>
        <li><AnchorLink className='anchor' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>

      </ul>

      <div className="contact"><AnchorLink className='anchor' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

    </div>
  )
}

export default Navbar