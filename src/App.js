//Import React Features
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import Views
import Home from './views/Home'

//Import Styles
import './App.css';
import './styles/global.scss'

function App() {
  return (
    <div className="App">
      
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
