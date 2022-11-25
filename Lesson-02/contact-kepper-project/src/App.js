
import './App.css';

import {BrowserRouter as  Router, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './Layout/Header/Header';
function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
