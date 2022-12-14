import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Portal() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/api/v1`);
				console.log(response);
			} catch (err) {}
		};
		fetchData();
	}, []);

	return (
		<div className="portal-page">
			<div className="portal-container">
				<div className="header-container">
					<div className="logo">
						<h1>pacs</h1>
					</div>
					<div className="profile"></div>
				</div>
				<div className="intro-container">
					<h2>Choose your Pac Stop!</h2>
					<p>
						Select a pac stop that's the most convenient for you! You can check
						the locker number and it's passcode at our website or the mobile
						app. You can sign up for email and text notifications for it as
						well!
					</p>
				</div>
				<div className="map-container">
					<span className="map-placeholder" />
				</div>
				<div className="selection-container">
					<h3>80 Spadina Ave. 4th Floor, Toronto, ON M5V 2J4</h3>
				</div>
				<div className="submit-container">
					<button className="send-btn">
						<Link to="/cart">
							<span className="fuchsia-gradient-text">
								Send this to my locker!
							</span>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
