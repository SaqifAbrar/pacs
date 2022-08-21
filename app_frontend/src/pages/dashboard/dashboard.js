import Navbar from "../../common/layout/navbar";
import Sidebar from "./sidebar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ListRow from "../../common/layout/listRow";



export default function Dashboard() {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [fulfilledOrders, setFulFilledOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/v1/orders/initial");
        const data = response.data;
        console.log(data);
        const pending = response.data.filter(
          (order) => order.status === "unfulfilled"
        );

        const fulfilled = response.data.filter(
          (order) => order.status === "fulfilled"
        );
        setPendingOrders(pending);
        setFulFilledOrders(fulfilled);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
    //console.log("useEffect called");
  }, []);

  return (
    <div className="dashboard-page">
      {/* import navbar then a div? and import dashboard ig */}
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-filter-buttons"></div>
        <div className="dashboard-orders-container">
          {/* do all that fancty schmancy json garbage in here */}

          {/* <ListRow
            styles="table-header"
            text1="Company"
            text2="Product(s)"
            text3="Date Ordered"
            text4="Status"
            text5="Locker #"
            text6="Locker Key"
          /> */}

          <h2>Pending Orders</h2>

        <div className="dashboard-orders"> 
        <table className="dashboard-table">
            <tr>
              <th>Company</th>
              <th>Product(s)</th>
              <th>Date Ordered</th>
              <th>Status(s)</th>
              <th>Locker #</th>
              <th>Locker Key(s)</th>
            </tr>

            {pendingOrders.map((order) => (
              <Link key={order.uid} to={`/orderView/${order.uid}`}>
                <ListRow
                  styles="pending"
                  text1={order.company_name}
                  text2={order.product_name}
                  text3={order.date}
                  text4={order.status}
                  text5={order.lock_num}
                  text6={order.lock_key}
                />
              </Link>
            ))}
          </table>
        </div>

          
        </div>
      </div>
    </div>
  );
}
