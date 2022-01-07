import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <section className="container wrapper">

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/countries" element={<Countries />} />

      </Routes>
    </section>
  );
}

export default App;
