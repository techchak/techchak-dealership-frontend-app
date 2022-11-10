import React, {  useState } from 'react';
import "./auth.css";
import Navbar from "../../components/Navbar/Navbar";
// import { Link, useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';
const Login = () => {
  // const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
})

const login = async (e) => {
  if(e) e.preventDefault();
  console.log("post", loginData)
  await Axios.post(`${process.env.REACT_APP_API}/auth/login`, {...loginData})
  .then(async (resp) => {
    console.log(resp)
      if (resp.status === 200) {
        localStorage.setItem("token", resp.data.token)
        console.log(loginData)
        window.location.href = "/product-listing"
   
      }
    }).catch((err) => {
      console.log(err)
    })

 
};

  return (
    <div>
      <Navbar />
      <div className="auth-container flex-center">
        <form  onSubmit={(e) => e.preventDefault()}>
        <div className="auth-main-container flex-center">
          <div className="auth-title">
            <h2 className="text-center">Login</h2>
          </div>
          <div className="auth-main display-col-centre">
            <div className="auth-email">
              <label htmlFor="mail">Enter your e-mail</label>
              <input
              defaultValue={(e) => {setLoginData({...loginData, email: e.target.value })}}
              onChange={(e) => {setLoginData({...loginData, email: e.target.value})}}
                placeholder="user123@gmail.com"
                className="text-input"
                type="text"
              />
            </div>
            <div className="auth-pwd">
              <label htmlFor="pwd">Enter your password</label>
              <input
              defaultValue={(e) => {setLoginData({...loginData, password: e.target.value })}}
              onChange={(e) => {setLoginData({...loginData, password: e.target.value})}}
                placeholder="*********"
                className="pwd-input"
                type="password"
              />
            </div>
            {/* <div className="auth-checkbox">
              <label className="select-input">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span className="text">Remember Me</span>
              </label>
              <Link to="/password">Forgot your Password?</Link>
            </div> */}
            <div className=" btn btn-block text-center" style={{backgroundColor: 'rgb(36, 182, 254) '}}>
              <div
                className="link-btn"
                onClick={(e) => login(e)}
              >
             Login
              </div>
            </div>
          </div>
        </div>
        </form>
    
      </div>
    </div>
  );
};
export default Login;
