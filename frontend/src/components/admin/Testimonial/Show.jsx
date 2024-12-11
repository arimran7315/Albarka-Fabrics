import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { Link } from 'react-router-dom'
import { apiUrl, token } from '../../common/http'
import {toast} from 'react-toastify' 
const Show = () => {
    const [testimonials, setTestimonials] = useState('');
    const fetchTestimonials = async () => {
        const res = await fetch(apiUrl + 'testimonials', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        });
        const result = await res.json();
        setTestimonials(result.data);
        console.log(result.data);
    }
    const deleteTestimonial = async (id) => {
        if (confirm('Are you sure you want to delete')) {
            const res = await fetch(apiUrl + 'testimonials/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            if (result.status == true) {
                const newTestimonials = testimonials.filter(testimonial => testimonial.id != id);
                setTestimonials(newTestimonials);
                toast.success(result.message);
            }else {
                toast.error(result.message);
              }
        }
    };
    useEffect(() => {
        fetchTestimonials();
    }, []);
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
                                <h3>Testimonials</h3>
                                <Link to='/admin/testimonials-create' className="btn btn-primary">Create</Link>
                            </div>
                            <hr />
                            <div className="card-body p-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                ID
                                            </th>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            testimonials && testimonials.length > 0 ? (
                                                testimonials && testimonials.map(testimonial => (
                                                    <tr key={testimonial.id}>
                                                        <td>
                                                            {testimonial.id}
                                                        </td>
                                                        <td>
                                                            {testimonial.name}
                                                        </td>
                                                        <td>
                                                            <Link to={`/admin/testimonials-edit/${testimonial.id}`} className='btn btn-last me-3'>
                                                                Edit
                                                            </Link>
                                                            <button onClick={() => deleteTestimonial(testimonial.id)} className='btn btn-primary'>
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan='3' className='text-center text-danger'>
                                                        No Testimonial Added Yet
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Show