import React from 'react';

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <img
          src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          alt="logo"
        />
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://image.flaticon.com/icons/svg/483/483356.svg"
          alt="search-icon"
        />
        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/591d04f256aa901b6f95d035a778faaa/2d2c8973-71ac-4033-b06b-4ceb92aed1ef_rw_600.gif?h=2c3e6e39b34c7335b10b5bcc190c114e"
            alt="user-dp"
            id="user-dp"
          />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>Log in</li>
            <li>Log out</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
