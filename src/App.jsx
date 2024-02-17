import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/:alpha3Code' element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
