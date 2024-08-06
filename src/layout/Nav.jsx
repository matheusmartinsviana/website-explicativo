import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav>
        <ul>
            <li><Link to="/website-explicativo/devops">DevOps</Link></li>
        </ul>
        </nav>
    );
}

export default Nav