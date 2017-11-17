import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard 
          </Link>
        </li>
        <li>
          <Link to="/charts">
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </Link>
        </li>
        <li>
          <Link to="/fables">
            <i className="fa fa-fw fa-table" /> Fables
          </Link>
        </li>
        <li>
          <Link to="/settings"> Settings </Link>
        </li>
        <li>
          <Link to="/wall"> Wall </Link>
        </li>
        <li>
          <Link to="/profiles"> Profiles </Link>
        </li>
        <li>
          <Link to="/marquee/filessssss"> Marquee </Link>
        </li>
        <li>
          <Link to="/marquee/wowsoamazing"> Marquee </Link>
        </li>
        
      </ul>
    </div>);  
}

export default SideNav;
