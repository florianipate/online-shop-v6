import { Link } from "react-router-dom";
import './TopNavbar.style.css';
const TopNavbar = () =>{
    return(
        <nav>
            <div className="top-nav-wrapper justify-spacebetween">
                <div className="logo-wrapper">Logo</div>
                <ul className="nav-links-wrapper">
                    <li className="nav-link-item">
                        <Link>Link 1</Link>
                    </li>
                    <li className="nav-link-item">

                        <Link>Link 2</Link>
                    </li>
                    <li className="nav-link-item has-dropdown">
                        <Link>
                            Link 3
                            <span className="arrow down"></span>
                        </Link>
                        
                        <ul className="submenu">
                            <li className="nav-link-item">
                                <Link>Submenu Link 1</Link>
                            </li>
                            <li className="nav-link-item">
                                <Link>Submenu Link 2</Link>
                            </li>
                            <li className="nav-link-item has-dropdown">
                                <Link>Submenu Link 3</Link>
                                {/* <span className="arrow"></span> */}
                                {/* <ul className="submenu1">
                                    <li className="nav-link-item">
                                        <Link>Inner Submenu Link 1</Link>
                                    </li>
                                    <li className="nav-link-item">
                                        <Link>Inner Submenu Link 2</Link>
                                    </li>
                                    <li className="nav-link-item">
                                        <Link>Inner Submenu Link 3</Link>
                                    </li>
                                    <li className="nav-link-item">
                                        <Link>inner Submenu Link 4</Link>
                                    </li>
                                </ul> */}




                            </li>
                            <li className="nav-link-item">
                                <Link>Submenu Link 4</Link>
                            </li>
                        </ul>
                        
                    </li>
                    <li className="nav-link-item">
                        <Link>Link 4</Link>
                    </li>
                    <li className="nav-link-item">
                        <Link>Link 5</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default TopNavbar;