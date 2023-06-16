import Footer from 'components/Footer';
import Header from 'components/Header';
import { Fragment } from 'react';
import { Link } from "react-router-dom";

const Signup = () => {



	return (
		<Fragment>
			<Header />
			<div className="container-fluid">
				<div className="main-login-section">
					<div className="login-section">
						<div className="row ">
							<div className="col-lg-7 login-form-column ">
								<h2>Sign up</h2>
								<form className="main-form">

									<div className="mb-4">

										<div className="input-icons-sign">
											<i className="name-icon">
											</i>
											<input type="text" className=" fc-sign " id="exampleInputName" aria-describedby="emailHelp" placeholder="First Name" required />

										</div>

										<div className="input-icons-sign">
											<i className="name-icon">
											</i>
											<input type="text" className=" fc-sign " id="exampleInputName" aria-describedby="emailHelp" placeholder="Last Name" required />

										</div>
									</div>

									<div className="mb-4 ">
										<div className="input-icons">
											<i className="phone-icon">
											</i>
											<input type="number" className=" fc-l " id="exampleInputName" aria-describedby="emailHelp" placeholder="Phone number" required />

										</div>
									</div>
									<div className="mb-4 ">
										<div className="input-icons">
											<i className="otp-icon">
											</i>
											<input type="email" className=" fc-l " id="exampleInputName" aria-describedby="emailHelp" placeholder="E-mail" required />

										</div>
									</div>

									<div className="submit-section">
										<button type="submit" className="">Sign up</button>
										<span> <Link to="/login"> Already have an account? </Link></span>
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
		</Fragment>
	)

}

export default Signup;