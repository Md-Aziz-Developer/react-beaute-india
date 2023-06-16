import { useShop } from 'hooks';
import { createElement, Fragment } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import routes from 'routes';

function App() {
	const { isLoggedIn } = useShop()
	return (
		<BrowserRouter>
			<Routes>
				{routes.publicRoutes.map((route, idx) => (
					<Fragment key={idx}>
						<Route
							path={route.path}
							element={createElement(route.component)}
						/>
					</Fragment>
				))}

				{routes.protectedRoutes.map((route, idx) => {
					return (
						<Fragment key={idx}>
							<Route
								path={route.path}
								// element={createElement(route.component)}
								element={isLoggedIn ? (
									createElement(route.component)
								) : (
									<Navigate to="/" replace />
								)}
							/>
						</Fragment>
					)
				})}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
