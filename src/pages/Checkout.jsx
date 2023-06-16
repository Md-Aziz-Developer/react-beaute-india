import { AddressForm, AddressList, OrderForm, UserLoginForm } from 'components/checkout';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useUser } from 'hooks';
import { Fragment, useState } from 'react';

const Checkout = () => {
	const { isUserLoggedIn } = useUser()
	const [id, setId] = useState(0)

	return (
		<Fragment>
			<Header />
			<div className="container-fluid">
				<div className="main-container-checkout">
					<div className="login-section">
						<div className="row ">
							<div className="login-form-column">

								{!isUserLoggedIn && (<UserLoginForm />)}


								{isUserLoggedIn && (
									<Fragment>

										<h2 style={{fontSize:"26px"}}>Delivery address</h2>
										<AddressForm editId={id} />
									</Fragment>
								)}

							</div>

						</div>
					</div>

					{isUserLoggedIn && (
						<Fragment>
							<div className="mb-2">
								<div className="new2"></div>
							</div>

							<AddressList idState={[id, setId]} />

							<div className="mb-2">
								<div className="new2"></div>
							</div>
						</Fragment>
					)}
					{
						isUserLoggedIn && (

							<OrderForm />
						)
					}
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default Checkout