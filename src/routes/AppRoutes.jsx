import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import Home from "../pages/Home";
import DevOps from "../pages/DevOps";
import NotFound from "../pages/NotFound";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/website-explicativo/" element={<Body />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/devops" element={<DevOps />}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes