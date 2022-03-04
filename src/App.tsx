import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import { CartProvider } from './context/CartContext';
import MainLayout from './components/Layouts/MainLayout/MainLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Provider store={store}>
            <MainLayout />
          </Provider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
