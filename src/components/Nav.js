import React from 'react';
import netflix from '../images/netflix.jpg';
import avatar from '../images/Netflix-avatar.png'
import './nav.css'

export default function Nav() {
  return (
    <div>
      <div className="nav">
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
