import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.jsx";
import {useContext} from "react";

export default function Navbar(){
    const {user,logout} = useContext(AuthContext)

    return <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-brand'>ShopHub</Link>
            <div className='navbar-links'>
                <Link to='/' className='navbar-link'>Home</Link>
                <Link to='/checkout' className='navbar-link'>Cart</Link>
            </div>
            { !user ? <div className='navbar-auth'>
                    <div className='navbar-links'>
                        <Link to='/auth' className='btn btn-secondary'>Login</Link>
                        <Link to='/auth' className='btn btn-primary'>Signup</Link>
                    </div>
                </div> : (
                <div className='navbar-user'>
                    <p className='navbar-user'>Hi. {user.email}</p>
                    <button onClick={logout} className='btn btn-primary'>Logout</button>
                </div>
                )
            }
        </div>
    </nav>
}