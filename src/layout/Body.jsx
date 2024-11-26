import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";

function Body() {
  return (
    <>
      <Nav />
      <div className="main-page-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Body;
