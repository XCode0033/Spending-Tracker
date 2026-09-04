import { NavLink } from "react-router";
const Footer = () => {
    return ( 
        <>
        <div className="flex flex-row gap-9  border-t border-border h-10 items-center justify-center text-text">
        <p>Home</p>
        <p>Activity</p>
        <NavLink to="/add-expense">+</NavLink>
        <p>Budget</p>
        <p>Profile</p>

        </div>
        
        </>
     );
}
 
export default Footer;