import logo from './logo.svg';
import './App.css';
import Header from "./Layouts/Header";
import Login from "./Layouts/Login";
import Mypage from "./Layouts/Mypage";
import {Route, Routes,BrowserRouter, useLocation, useNavigate} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
