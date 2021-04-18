import React from 'react';
import { faHome, faHashtag, faBell, faEnvelope, faChevrondown, faSearch  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import user1 from '../assets/user1.jpg';

function Header() {

   return (

    <nav className="feeds-nav">
       <div className="icons">
          <a href="#" className="active"> <FontAwesomeIcon icon={faHome} /></a>
          <a href="#"><FontAwesomeIcon icon={faHashtag} /></a>
          <a href="#"><FontAwesomeIcon icon={faBell} /></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
       </div>
       <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
             type="text"
             placeholder="Search Twitter"
             className="search-bar-input"
          />
       </div>
       <div className="user">
          <div className="user-img-wrapper">
            <img src={user1} alt="image1" />
         </div>
          <a href="#" className="user-link ">Jane Smith</a>
          <FontAwesomeIcon icon={faChevrondown} />
       </div>
    </nav>
   )
}

export default Header;