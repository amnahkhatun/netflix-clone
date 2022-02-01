import React, { useEffect, useState } from 'react';
import netflix from '../images/netflix.jpg';
import avatar from '../images/Netflix-avatar.png'
import './nav.css'

export default function Nav() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false)
      }
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])
  return (
    <div>
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav__logo"
          src={netflix}
          alt="Netflix Logo" />
        <img
          className="nav__avatar"
          src={avatar}
          alt="Netflix Logo"
        />
      </div>
    </div>
  )
}
