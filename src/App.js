import './App.css';

function App() {
  return (
    <div className="App">
        <header className="nav">
          <div className="nav__logo">Rollback</div>
          <div className="nav__navbar">  
            <div className="navbar__left">
              <div>Categories</div>
            </div>
            <div className="navbar__right">
              <ul className="navbar__userItems">
                <li>Cart</li>
                <li>Account</li>
              </ul>
            </div>
          </div>
        </header>
    </div>
  );
}

export default App;
