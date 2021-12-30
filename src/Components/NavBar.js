import { React } from 'react';
import { NavLink } from 'react-router-dom'
const NavBar = ({fullName}) => {

return(
    <div>

    <h1 className="my-title">
        {fullName}
        
    </h1><br />
    <ul>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
    </div>);
}



export default NavBar
