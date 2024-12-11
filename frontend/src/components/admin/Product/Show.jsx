import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import { Link } from 'react-router-dom';
import { apiUrl, token } from '../../common/http';
import { toast } from 'react-toastify';

const Show = () => {
    const [products, setProducts] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const fetchProducts = async (page) => {
        const res = await fetch(`${apiUrl}products?page=${page}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        });
        const result = await res.json();
        if (result.status) {
            setProducts(result.data.data); // Laravel pagination format
            setCurrentPage(result.data.current_page);
            setTotalPages(result.data.last_page);
        }
    };

    const deleteProduct = async (id) => {
        if (confirm('Are you sure you want to delete?')) {
            const res = await fetch(`${apiUrl}products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            if (result.status === true) {
                toast.success(result.message);
                fetchProducts(currentPage); // Refresh products after deletion
            } else {
                toast.error(result.message);
            }
        }
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page); // Make sure this is updating the state correctly
    };

    return (
        <>
            <Header />
            <section className="container py-5">
                <div className="row py-5">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="card shadow border-0 p-4">
                            <div className="d-flex justify-content-between">
                                <h3>Products</h3>
                                <Link to='/admin/products-create' className='btn btn-primary'>Create</Link>
                            </div>
                            <hr />
                            <div className="card-body-p-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Sub Category</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products && products.length > 0 ? (
                                                products.map(product => (
                                                    <tr key={product.id}>
                                                        <td>{product.id}</td>
                                                        <td>{product.name}</td>
                                                        <td>{product.category}</td>
                                                        <td>{product.sub_category}</td>
                                                        <td>
                                                            <Link to={`/admin/products-edit/${product.id}`} className='btn btn-last me-3'>
                                                                Edit
                                                            </Link>
                                                            <button onClick={() => deleteProduct(product.id)} className='btn btn-primary'>
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan='5' className='text-center text-danger'>
                                                        No Product Added Yet
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                    <tfoot>
                                    <div className="pagination-outer mt-4">
                                    <ul className="pagination">
                                        <li>
                                            <a
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                className={currentPage === 1 ? "disabled" : ""}
                                                role="button"
                                            >
                                                <i class="fa-solid fa-angles-left"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                className={currentPage === totalPages ? "disabled" : ""}
                                                role="button"
                                            >
                                                <i class="fa-solid fa-angles-right"></i>
                                            </a>
                                        </li>
                                    </ul>

                                    {/* Display Current Page */}
                                    <span className="current-page">Page {currentPage} - {totalPages} </span>
                                </div>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Show;
