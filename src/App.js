import './App.css';
import { BrowserRouter } from "react-router-dom";
import MainLayout from './components/Layouts/MainLayout/MainLayout';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
    </div>
  );
}

export default App;
