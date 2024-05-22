import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              BUDGET BUDDY
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <p>
                <li className="nav-item">
                  <p className="nav-link active">
                    {loginUser && loginUser.name}
                  </p>
                </li>
              </p>
              <p>
                <li className="nav-item">
                  <button className="btn btn-primary" onClick={logoutHandler}>
                    LOGOUT
                  </button>
                </li>
              </p>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
