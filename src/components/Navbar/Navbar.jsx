import React from "react";
import { NavLink,   } from "react-router-dom";
// import { useAuth } from "../../contexts/auth-context";

const Navbar = () => {
  // const history = useHistory();
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "black" : "white",
  });
//   const logout = async (e) => {

//     if(e) e.preventDefault();

 
//     window.location.href = "/"
    
// }

  // const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <>
      <div className="navbar-container" style={{backgroundColor: 'rgb(36, 182, 254)'}}>
        <ul className="navbar nav-fixed d-flex">
          <div className="d-flex">
            {/* <i className="fa fa-car hamberg-btn" aria-hidden="true"></i> */}
            <NavLink style={getActiveStyle} to="/">
              <p className="nav-title" style={{color: '#fff'}}>Techchak Dealer Store</p>
            </NavLink>
          </div>
          <NavLink style={getActiveStyle} to="/product-listing">
            Products
          </NavLink>
          <div className="search-container d-flex">
            <input
              type="text"
              name="search"
              className="search-bar"
              placeholder="Search for car"
            />
            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
          </div>
          <ul className="navbar-right d-flex">
            <li>
              <NavLink to="/cart">
                <i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/wishlist">
                <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
              </NavLink>
            </li> */}
            <li>
              {/* <NavLink to="/user-profile">
                <img
                  src="https://picsum.photos/id/111/200/300"
                  alt="navbar-img"
                />
              </NavLink> */}
              {/* <Link to="/login"
                className="btn btn-largetext-center" style={{color: 'rgb(36, 182, 254', backgroundColor: '#fff'}}
               onClick={(e) =>logout(e)}
              >
              Logout
              </Link> */}
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
