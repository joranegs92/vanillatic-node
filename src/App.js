import logo from './logo.svg';
import './App.css';
import './Asset/style.css'
import Header from "./Layouts/Header";
import {Route, Routes,BrowserRouter, useLocation, useNavigate} from "react-router-dom";
import Main from "./Layouts/Main";
function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Main/>
        {/*  <Footer/>*/}
      </BrowserRouter>
  );
}

export default App;
