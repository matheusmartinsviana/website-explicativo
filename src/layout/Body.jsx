import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";

function Body() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Body