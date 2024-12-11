import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Banner from '../../../assets/images/Operations/processing/banner-1.png'
import { Link } from 'react-router-dom'
import { apiUrl, fileUrl } from '../../common/http'
import Hero from '../../common/Hero'
import SidebarFrontend from '../../common/SidebarFrontend'
const Processing = () => {
    const [process, setProcess] = useState('');
    const fetchProcess = async () => {
        const res = await fetch(apiUrl + 'operation/processing' ,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const result = await res.json();
        setProcess(result.data);
        console.log(result.data);
    }
    useEffect(()=>{
        fetchProcess();
    },[]);
    return (
        <>
            <Header />
            <Hero heading={"Operations"} subheading={' / Processing'}/>
            <section className="container py-5 section-product">
                <div className="row py-5">
                    <div className="col-md-8">
                        <h2>Proccesing</h2>
                        <div className="card shadow border-0 rounded-0">
                            <img src={Banner} alt="" width='100%' className='rounded' />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum vitae blanditiis totam non, sequi voluptatibus quibusdam. Expedita fuga itaque earum consequatur enim nostrum eos doloremque. Magni nulla dolores modi provident magnam eveniet nesciunt. Facilis magnam quaerat ad cum, quod, dolorum ipsam ea aspernatur dignissimos similique excepturi ipsum dolor natus nobis laboriosam accusantium. Amet, nihil? Nemo maiores, aspernatur dolorum iste natus eum harum corporis sunt, placeat nobis quaerat dolorem explicabo tenetur id laudantium modi, laborum voluptatum ab eaque nam officia quidem tempore vel! Rerum, temporibus possimus quisquam voluptatum dicta iure animi enim necessitatibus voluptatibus sunt a neque minus repellat cupiditate?</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <SidebarFrontend/>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        process && process.map(p => (
                            <div className="col-md-4" key={p.id}>
                            <div className="product-grid">
                                <div className="product-image">
                                    <Link to='/operations/processing' className="image">
                                        <img src={fileUrl+'uploads/operations/small/'+p.image} alt={p.name}/>
                                    </Link>
                                    <div className='product-links'>
                                        <h3></h3>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3 className="title">{p.name}</h3>
                                    <p className='text-center'>{p.description}</p>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                   
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Processing