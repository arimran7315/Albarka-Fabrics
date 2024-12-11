import React, { useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiUrl, token } from '../../common/http'
import {toast} from 'react-toastify'
const Create = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageId ,setImageId] = useState(null);
    const navigate = useNavigate();
    const handleImage = async (e) =>{
        const formData = new FormData();
        const image = e.target.files[0];
        // console.log(image);
        formData.append("image", image);
        const res = await fetch(apiUrl + 'temp-image', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: formData
        }).then(response => response.json())
        .then(result => {
            if(result.status == false){
                toast.error(result.errors.image[0]);
            }else{
               setImageId(result.data.id);
            }
        });
    }

    const onSubmit = async (data) => {
        const newData = {...data, 'imageId':imageId};

        const res = await fetch(apiUrl+'testimonials',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();
        if(result.status == false){
            toast.error(result.message);
        }else{
            toast.success(result.message);
            navigate('/admin/testimonials');
        }
    }
  return (
    <>
    <Header/>
    <section className="container py-5">
        <div className="row py-5">
            <div className="col-md-12">
                <div className="card shadow border-0 p-4">
                   <div className="d-flex justify-content-between">
                   <h3>
                        Testimonials / Create
                    </h3>
                    <Link to='/admin/testimonials' className='btn btn-primary'>
                        Back
                    </Link>
                   </div>
                   <hr />
                   <div className="card-body p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label htmlFor="Name" className="form-label">Name:</label>
                            <input type="text" placeholder='Enter Client Name' className={`form-control ${errors.name && 'is-invalid'}`} {...register('name',{required:"This field is required"})}/>
                            {errors.name && <span className='invalid-feedback'>{errors.name?.message}</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="Name" className="form-label">image:</label> <br />
                            <input type="file" onChange={handleImage} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="Name" className="form-label">Comment:</label>
                            <textarea className={`form-control ${errors.comment && 'is-invalid'}`} rows='6' {...register('comment',{required:'This field is required'})} ></textarea>
                            {errors.comment && <span className='invalid-feedback'>{errors.comment?.message}</span>}
                        </div>
                        <div className="row">
                            <div className="col mt-3">
                                <button className='btn btn-last'>
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                   </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Create