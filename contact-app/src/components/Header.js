import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="ui fixed menu">
      <Link to="/" className="ui container center">
        <h2>Contact Manager</h2>
      </Link>
    </div>
  );
};

export default Header;
