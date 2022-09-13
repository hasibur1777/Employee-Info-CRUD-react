import Home from './Home';
import EditData from './EditData';
import Create from './Create';
import About from './About';
import View from './View';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/:id" element={<EditData />} />
          <Route path="/employee/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
