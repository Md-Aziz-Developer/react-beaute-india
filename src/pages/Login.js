import { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';

class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="main-login-section">
            <div className="login-section">
              <div className="row ">
                <div className="col-lg-7 login-form-column ">
                  <h2>Log in</h2>
                  <form className="main-form">

                    <div className="mb-4 ">
                      <div className="input-icons">
                        <i className="name-icon">
                        </i>
                        <input type="text" className=" fc-l " id="exampleInputName" aria-describedby="emailHelp" placeholder="Name" required />

                      </div>
                    </div>
                    <div className="mb-4 ">
                      <div className="input-icons">
                        <i className="phone-icon">
                        </i>
                        <input type="text" className=" fc-l " id="exampleInputName" aria-describedby="emailHelp" placeholder="Phone number/ mail id" required />

                      </div>
                    </div>
                    <div className="mb-4 ">
                      <div className="input-icons">
                        <i className="otp-icon">
                        </i>
                        <input type="text" className=" fc-l " id="exampleInputName" aria-describedby="emailHelp" placeholder="OTP" required />

                      </div>
                    </div>

                    <div className="submit-section">
                      <button type="submit" className="">Login</button>
                      <span> <Link to="/signup"> Create new account</Link></span>
                    </div>

                  </form>
                </div>
                <div className="col-lg-5 pb-5 lgn-img">
                  <img src={process.env.PUBLIC_URL + "pictures/l-img.png"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <Footer />
      </>
    )
  }
}

export default Login;