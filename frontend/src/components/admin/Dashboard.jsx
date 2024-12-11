import React, { useCallback, useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Sidebar from '../common/Sidebar'
import {apiUrl, token} from '../common/http'
const Dashboard = () => {
    const [Total, setTotal] = useState('');

    const fetchTotal = useCallback(async()=>{
        const res = await fetch(`${apiUrl}total`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        });
        const result = await res.json();
        setTotal(result);
        console.log(result);
    });

    useEffect(()=>{
        fetchTotal();
    },[]);
    return (
        <>
            <Header />
            <section className="container py-5">
                <div className="row py-5">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                        <div className="card shadow border-0 p-4">
                            <h3>
                                Dashboard
                            </h3>
                            <hr />
                            <div className="card-body-p-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card shadow border-0 p-4 bg-primary text-white">
                                            <h3 className='border-bottom-primary' >Products</h3>
                                            <div className="d-flex justify-content-between">
                                                <p>Total: <span>{Total.products}</span></p>
                                                <p><span className="badge text-bg-primary">Active</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow border-0 p-4 bg-secondary">
                                        <h3 className='border-bottom-secondary' >Operations</h3>
                                            <div className="d-flex justify-content-between">
                                                <p>Total: <span>{Total.operations}</span></p>
                                                <p><span className="badge text-bg-secondary">Active</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="card shadow border-0 p-5 bg-last">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Dashboard