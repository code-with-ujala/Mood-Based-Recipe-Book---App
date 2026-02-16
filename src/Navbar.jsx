import { NavLink } from "react-router-dom";
function Navbar(){
    return<> 
    <div className="header">
        <ul className="a">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/a">Recipes</NavLink>
            </li>
        </ul>
    </div>
    </>
}
export default Navbar;
