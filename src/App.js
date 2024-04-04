import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
