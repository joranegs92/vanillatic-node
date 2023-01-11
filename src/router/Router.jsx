import {Route, Routes} from "react-router-dom";

import Login from "../Pages/Login";
import Join from "../Pages/Join";
import Mypage from "../Pages/Mypage";
import Detail from "../Pages/Detail";
function Router() {
    return (
        <Routes>
            <Route path='/join' element={<Join/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/mypage' element={<Mypage/>}/>
            <Route path='/detail' element={<Detail/>}/>
        </Routes>
    )
}export default Router;
