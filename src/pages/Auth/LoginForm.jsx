import React, { useState } from "react";
import { Link, useNavigate     } from "react-router-dom";
import account from "../../assets/images/account/account-icon.png";
import imgEmail from "../../assets/images/account/email.png";
import imgPass from "../../assets/images/account/passwork.png";
import { AiOutlineMail } from "react-icons/ai";

const LoginForm = ({ login, linkHome }) => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: "", passwork: "", isCheck: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };

  const handleClick = () => {
    if(details.isCheck == true){
      navigate('/HomeRouter/Home');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="login">
        <div className="login__container">
          <div>
            {/* icon account */}
            <div className="login__imgs">
              <div className="login__container-image">
                <img
                  src={account}
                  alt="login__profile"
                  className="login__profile"
                />
              </div>
            </div>
            {/* form nhập email vs pass  */}
            <div>
              <h1>Login Page</h1>
              {/* tên đăng nhập : adminUser */}
              <div>
                <img src={imgEmail} alt="email" className="login__email" />
                <input
                  id="email"
                  type="text"
                  placeholder="user name"
                  className="login__name"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                />
              </div>
              {/* mật khẩu : admin123 */}
              <div className="login__second-input">
                <img src={imgPass} alt="pass" className="login__email" />
                <input
                  id="password"
                  type="password"
                  placeholder="passwork"
                  className="login__name"
                  onChange={(e) =>
                    setDetails({ ...details, passwork: e.target.value })
                  }
                  value={details.passwork}
                />
              </div>
              {/* button */}
              <div className="login__login-button">
                {/* <Link to={`/HomeRouter`}> */}
                  <button 
                   onClick={details.isCheck}
                   type="login"
                   >
                     Login
                  </button>
                {/* </Link> */}
              </div>

              <p className="login__link">
                <a href="#">Forgot password ?</a> or <a href="#">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
