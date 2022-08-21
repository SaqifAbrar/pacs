import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout/checkout";
import Dashboard from "./pages/dashboard/dashboard";
import Portal from "./pages/gateway/portal";

import "./sass/main.scss";

function App() {
	return (
		<div className="App">
			<Router>
				{/*<Navbar/>*/}
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/portal" element={<Portal />} />
					<Route path="/cart" element={<Checkout />} />
					<Route path="*" element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
