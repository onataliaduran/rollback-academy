import './App.css';

import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'; 

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="Rollback Academy" />
    </div>
  );
}

export default App;
