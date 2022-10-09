import { Link } from "react-router-dom";

const TopNavbar = () =>{
    return(
        <nav className="bg-white">
             <div className="flex items-center font-medioum justify-around">
                <div>
                    <h2>Logo</h2>
                    <ul>
                        <li>
                            <Link>Link 1</Link>
                            <Link>Link 2</Link>
                            <Link>Link 3</Link>
                            <Link>Link 4</Link>
                            <Link>Link 5</Link>
                        </li>
                    </ul>
                </div>

             </div>
        </nav>
    )
}
export default TopNavbar;