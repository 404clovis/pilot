import { Link } from 'react-router-dom'
import React from 'react'


const Menu = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/orders">Orders</Link></li>
  </ul>
)

export default Menu
