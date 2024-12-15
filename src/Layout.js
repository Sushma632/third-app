import {Link} from "react-router-dom"
const Layout=() =>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>

                </li>
                <li>
                    <Link to="/Blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/NoPage">NoPage</Link>
                </li>
            </ul>
        </nav>
        </>
    )
};
export default Layout