import { Link } from "react-router-dom";
import './TopNavbar.style.css';
const TopNavbar = () =>{
    return(
        <nav className="bg-white">
            <div className="flex justify-spacebetween">
                <div className="logo-wrapper">Logo</div>
                <ul className="nav-links-wrapper">
                    <li>
                        <Link>Link 1</Link>
                    </li>
                    <li>
                        <Link>Link 2</Link>
                    </li>
                    <li>
                        <Link>Link 3</Link>
                    </li>
                    <li>
                        <Link>Link 4</Link>
                    </li>
                    <li>
                        <Link>Link 5</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default TopNavbar;