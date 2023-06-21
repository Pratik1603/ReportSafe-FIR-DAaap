import './App.css';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Officer from "./components/pages/officer";
import Home from "./components/pages/home";
import Footer from "./components/footer";
function App() {
  return (
    <div className="bg-[#96bbd9]">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="officer" element={<Officer />} />
        </Routes>
      </BrowserRouter>
       <Footer/>
      
    </div>
  );
}

export default App;
