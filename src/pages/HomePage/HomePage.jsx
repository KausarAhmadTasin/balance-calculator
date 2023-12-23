import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <h2>Expense Tracker</h2>

      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">$0.00</h1>

        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">
              +$0.00
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">
              -$0.00
            </p>
          </div>
        </div>

        <h3>History</h3>
        <ul id="list" className="list">
          {/* <!-- <li className="minus">
        Cash <span>-$400</span><button className="delete-btn">x</button>
      </li> --> */}
        </ul>

        <h3>Add new transaction</h3>
        <form id="form">
          <div className="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input type="number" id="amount" placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
