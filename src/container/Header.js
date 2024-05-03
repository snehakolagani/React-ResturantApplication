import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


const Header = ({order}) => {
 
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand'>Pista House</a>
            <button className='btn btn-success pull-right'><Link to="/orders" style={{color:"white"}}>Orders</Link>
            <span className='badge bg-secondary'>{order}</span></button>
            <Link to="/logout">LOGOUT</Link>
        </nav>
    </div>
  )
}

export default Header