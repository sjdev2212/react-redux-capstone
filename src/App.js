import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';

function App() {
  const location = useLocation();
  return (
    <section className="container wrapper">

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/countries/:country" country={location.state} element={<Countries />} />

      </Routes>
    </section>
  );
}

export default App;
