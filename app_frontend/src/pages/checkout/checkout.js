

function Checkout() {
  return (
    <div className="App">
        <br></br>
        <img textAlign="left" src="bestbuy.png" width="110" height="76"></img>
        <h1>Ship Via</h1>
        <ul>
            <li>
                <p style={{textAlign:"left"}}>Standard Shipping</p>
            </li>
            <li>
                <p style={{textAlign:"left"}}>Express Shipping</p>
            </li>
            <li>
                <p style={{textAlign:"left"}}>Ship with PACS</p>
            </li>
            <a href="google.com" style={{textAlign:"left"}}>Change</a>
        </ul>
        <hr></hr>
        <h1>Pay With</h1>
        <ul>
            <li>
                <p style={{textAlign:"left"}}>ScotiaCard with Visa Debit</p>
                <p style={{textAlign:"left"}}>Debit ****7403</p>
            </li>
            <a href="google.com"  style={{textAlign:"left"}}>+ Add debit or credit card</a>
        </ul>
        <hr></hr>
        <button type="button">Agree and Continue!</button>
    </div>
  );
}

export default Checkout;
