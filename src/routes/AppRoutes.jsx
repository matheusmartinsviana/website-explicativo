import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import DevOps from "../pages/devops/DevOps";
import NotFound from "../pages/error/NotFound";
import Home from "../pages/home/Home";
import Javascript from "../pages/js/Javascript";
import Html from "../pages/html/Html";
import Css from "../pages/css/Css";
import Nodejs from "../pages/nodejs/Nodejs";
import ReactPage from "../pages/react/ReactPage";
import Contact from "../pages/contact/Contact";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/nodejs" element={<Nodejs />} />
            <Route path="/reactjs" element={<ReactPage />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
