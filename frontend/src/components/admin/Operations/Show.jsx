import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { Link } from 'react-router-dom'
import { apiUrl, token } from '../../common/http'
import {toast} from 'react-toastify'
const Show = () => {
    const [operations, setOperations] = useState(null);

    const fetchOperations = async () =>{
        const res = await fetch(apiUrl+'operations',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        });
        const result = await res.json();
        console.log(result.data);
        setOperations(result.data);
    }

    const deleteOperation = async (id) => {
        if (confirm('Are you sure you want to delete?')) {
            const res = await fetch(`${apiUrl}operations/${id}`, {
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
            } else {
                toast.error(result.message);
            }
        }
    };
    useEffect(()=>{
        fetchOperations();
    },[]);
  return (
    <>
    <Header/>
    <section className="container py-5">
        <div className="row py-5">
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-9">
                <div className="card shadow border-0 p-4">
                    <div className="d-flex justify-content-between">
                        <h3>
                            Operations
                        </h3>
                        <Link to='/admin/operations-create'  className='btn btn-primary'>Create</Link>
                    </div>
                    <hr />
                    <div className="card-body p-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                operations && operations.length > 0 ?(
                                    operations && operations.map(operation => (
                                        <tr key={operation.id}>
                                            <td>{operation.id}</td>
                                            <td>{operation.name}</td>
                                            <td>{operation.category}</td>
                                            <td>
                                                <Link to={`/admin/operations-edit/`+operation.id} className='btn btn-last me-3'>Edit</Link>
                                                <button onClick={()=>deleteOperation(operation.id)} className='btn btn-primary'>Delete</button>
                                            </td>

                                        </tr>
                                    ))
                                ):(
                                    <tr>
                                        <td colSpan='4' className='text-danger text-center'>
                                            No operation Added Yet
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
    <Footer/>
    </>
  )
}

export default Show