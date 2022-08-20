import React from "react";
import Navbar from "../../common/layout/navbar";
import Sidebar from "./sidebar";


export default function Dashboard() {
	return <div className="dashboard-page">
        {/* import navbar then a div? and import dashboard ig */}
        <Navbar/>
        <div className="dashboard-container">
            <Sidebar/>
            <div>
                sample text to see where it renders
            </div>
        </div>

   

    </div>;
}
