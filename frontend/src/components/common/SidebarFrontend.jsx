import React from 'react'
import { Link } from 'react-router-dom'

const SidebarFrontend = () => {
  return (
    <div className="card border-0 bg-light">
    <h4 className="px-4 pt-4">Our Products</h4>
    <div className="card-body">
        <div className="sidebar-info">
            <ul>
                <li><Link to="/products/fabric">Fabric</Link></li>
                <li><Link to="/products/home-textile">Home Textile</Link></li>
                <li><Link to="/products/institutional-garments">Institutional Garments</Link></li>
                <li><Link to="/products/institutional-textile">Institutional Textile</Link></li>
                <li><Link to="/products/garments">Garments</Link></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default SidebarFrontend