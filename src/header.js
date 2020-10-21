import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const listNav = ['home', 'profile', 'experience', 'contact'];
  return (
    <div className="top">
      {listNav.map((nav) => {
        return (
          <Link to={`/${nav}`} key={nav}>
            <div className="menu">{nav}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default Header;
