import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				{/*<Navbar/>*/}
				<Routes>
					<Route path="/dashboard" element={<Dashboard />}></Route>
					<Route path="*" element={<Dashboard />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
