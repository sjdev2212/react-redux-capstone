import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cities from './components/Cities/Cities';

function App() {
  return (
<section>


<Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/cities" element={<Cities />} />

      

      </Routes>
</section>
  );
}

export default App;
