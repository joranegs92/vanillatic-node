import {Route, Routes} from "react-router-dom";

import Login from "../Pages/Login";
import Join from "../Pages/Join";
import Mypage from "../Pages/Mypage";
function Router() {
    return (
        <Routes>

            <Route path='/join' element={<Join/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/mypage' element={<Mypage/>}/>
        </Routes>
    )
}export default Router;