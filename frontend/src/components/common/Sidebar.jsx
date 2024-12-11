import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../admin/context/Auth';

const Sidebar = () => {
    const {logout} = useContext(AuthContext);

    return (
        <>
            <div className="sidebar">
                <div className="card border-0 shadow p-4">
                    <h3>Sidebar</h3>
                    <div className="card-body p-4">
                        <ul>
                            <li >
                                <Link to="/admin/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/admin/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/admin/operations">Operations</Link>
                            </li>
                            <li >
                                <Link to="/admin/testimonials">Testimonials</Link>
                            </li>
                        </ul>

                        <div className="row">
                            <div className="col mt-3">
                                <button onClick={logout} className='btn btn-last'>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar