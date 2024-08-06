import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import Home from "../pages/Home";
import DevOps from "../pages/DevOps";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/website-explicativo" element={<Body />}>
                    <Route path="/website-explicativo/" element={<Home />}/>
                    <Route path="/website-explicativo/devops" element={<DevOps />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes