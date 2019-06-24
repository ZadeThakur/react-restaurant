import React from "react";
import {Link} from "react-router-dom";




const Header = () =>{
  return(
      <div className="ui three item menu" >
        <Link to="/" className="item">Home</Link>
        <Link to="/placeOrder" className="item">Place Order</Link>
        <Link to="/aboutUs" className="item">About Us</Link>
      </div>
  );
}
export default Header;
