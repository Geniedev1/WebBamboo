import './App.css';
import { Home } from './Pages/Home';
import { ProductDetails } from './Pages/ProductDetails';
import { Router } from './Routes/Router';
import Chatbot from './Component/Chatbot';
function App() {
  return (
    <>
    <Router/>
    <Chatbot/>
    </>
  );
}

export default App;
