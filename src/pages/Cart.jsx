import deleteImg from 'assets/pictures/delete.png';
import QuantityUpdate from 'components/cart/QuantityUpdate';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { ProductCard, ProductQuery } from 'components/products';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { remove } from 'store/cart/actions';

const Cart = () => {
	const dispatch = useDispatch()
	const { data, subTotal } = useSelector(state => state.cart)
	const { data: products } = ProductQuery()

	return (
		<Fragment>
			<Header />
			<div className="container-fluid">
				<div className="main-cart-section">
					<div className="container-fluid">
						<h1 style={{fontSize:"26px"}} className="pt-4 cart-heading ">Cart</h1>
						<div className="row mt-4 mb-5">
							<div className="col-lg-8 ">
								<div className="cart-section p-4">

									{
										data.length > 0 ? (
											<Fragment>
												{data.map((item, idx) => (
													<Fragment key={idx}>
														<div className="row cart-main">
															<div className="col-lg-3 col-md-3 col-sm-4">
																<img src={item?.model?.image} alt="" />
															</div>
															<div className="col-lg-9 col-md-9 col-sm-8">
																<div className="head-price mt-3">
																	<h5 style={{fontSize:"20px" , padding: 20 }}>{item?.model?.name}</h5>
																	<h4 style={{fontSize:"20px" , padding: 20 }}>₹{item?.price}</h4>
																</div>
																<div className="qunt-main">
																	<div className="quantity mt-4">
																		<h6 style={{fontSize:"22px"}}>Quantity</h6>

																		<QuantityUpdate quantity={item?.quantity} id={item?.id} />
																		<div className='delete-img' >
																	<img src={deleteImg} alt="" style={{marginLeft: "2rem"}} onClick={() => dispatch(remove(item.id))} />
																</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="dashed-border"></div>
													</Fragment>
												))}
											</Fragment>
										) : (
											<p className='text-center'>No product here</p>
										)
									}





								</div>
							</div>
							<div className="col-lg-4 pt-1">
								<div className="coupon-section mb-3">
									<h5 className="mb-3">Apply coupon</h5>
									<form action="">
										<input type="text" placeholder="coupon code" className="coupon-input" />
										<input type="submit" value="Apply" className="coupon-btn" />
									</form>
								</div>
								<div className="total-section">
									<h1 style={{fontSize:"26px"}} className="mb-5"> <u> Total</u></h1>
									<div className="total-products">
										{
											data.map((item, idx) => (
												<Fragment key={idx}>
													<div className="product-price">
														<h5 style={{fontSize:"20px"}}>{item?.model?.name}</h5>
														<span style={{fontSize:"20px"}}>₹{Number(item?.quantity) * Number(item?.price)}</span>
													</div>
												</Fragment>
											))
										}


										{/* <div className="product-price">
											<h5>GST</h5><span>0</span>
										</div> */}
										<div className="mb-2 mt-4">
											<div className="new2"></div>
										</div>
										<div className="product-price">
											<h5 style={{fontSize:"24px"}}>Sub Total</h5><span style={{fontSize:"24px"}}>₹{subTotal}</span><br></br>
											
											
										</div>
										<p>including ({(subTotal*18)/100}) in taxes</p>
									</div>
									<Link to="/checkout" className="payment-btn mt-5" > Proceed to Payment</Link>
								</div>
							</div>
						</div>
					</div>
					<div className=" Related-product-section">
						<h3>You may also like</h3>
						<Link to='/products'>
							View More
						</Link>
					</div>
					<div className="">
						<div className="row text-center mt-2 mb-5">

							{products.length > 0 ? (
								<Fragment>
									{products.map((product, idx) => {
										if (idx < 4) {
											return (
												<Fragment key={idx}>
													<ProductCard product={product} />
												</Fragment>
											)
										}
									})}
								</Fragment>
							) : (
								<div className='alert alert-info'>No product found</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default Cart;