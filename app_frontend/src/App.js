import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Portal from "./pages/gateway/portal";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				{/*<Navbar/>*/}
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/portal" element={<Portal />} />
					<Route path="*" element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
