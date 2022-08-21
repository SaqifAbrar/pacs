import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar-component">
      <br />
      <h3 className="sidebar-text sidebar-welcome"> Welcome Back!</h3>
      <br />
      <div className="sidebar-headings">
        <div className="sidebar-links">
          <span class="material-symbols-outlined sidebar-icons">
            sentiment_satisfied
          </span>
          <p className="sidebar-text"> My Profile </p>
        </div>
        <div className="sidebar-links">
          <span class="material-symbols-outlined sidebar-icons">
            house
          </span>
          <p className="sidebar-text"> Home </p>
        </div>
        <div className="sidebar-links">
          <span class="material-symbols-outlined sidebar-icons">
            shopping_cart
          </span>
          <p className="sidebar-text"> Orders </p>
        </div>
        <div className="sidebar-links">
          <span class="material-symbols-outlined sidebar-icons">
            location_on
          </span>
          <p className="sidebar-text"> Locations </p>
        </div>
        <div className="sidebar-links">
          <span class="material-symbols-outlined sidebar-icons">
            settings
          </span>
          <p className="sidebar-text"> Settings </p>
        </div>
        <div className="sidebar-links logout-gap">
          <span class="material-symbols-outlined sidebar-icons ">
            logout
          </span>
          <p className="sidebar-text"> Log Out </p>
        </div>


      </div>
    </div>
  );
}
