import React, { useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiUrl, token } from '../../common/http'
import { toast } from 'react-toastify'
const Create = () => {
    const [imageId, setImageId] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
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
        const newData = {...data,'imageId': imageId};
        const res = await fetch(apiUrl + 'products',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();
        if(result.status == true){
            toast.success(result.message);
            navigate('/admin/products');
        }else{
            toast.error(result.message);
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
                        <h3>Products / Create</h3>
                        <Link to='/admin/products' className='btn btn-primary'>Back</Link>
                    </div>
                    <hr />
                    <div className="card-body py-5 product-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                                <label htmlFor="product-image" className="form-label">Image:</label> <br />
                                <input type="file" onChange={handleImage} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" className="form-control" {...register('name')} />
                            </div>
                            <div className="form-group mb-3">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="Category" className="label-form">Category<span>*</span>:</label>
                                        <select className={`form-select ${errors.category && 'is-invalid'}`} {...register('category',{required:'This field is required'})}>
                                            <option value="">--Select Category--</option>
                                            <option value="fabrics">Fabrics</option>
                                            <option value="Home Textile">Home Textile</option>
                                            <option value="Institutional Garments">Institutional Garments</option>
                                            <option value="Institutional Textile">Institutional Textile</option>
                                            <option value="Garments">Garments</option>
                                        </select>
                                        {errors.category && <span className='invalid-feedback'>{errors.category?.message}</span>}
                                    </div>
                                    <div className="col">
                                        <label htmlFor="Category" className="label-form">Sub Category<span>*</span>:</label>
                                        <select className={`form-select ${errors.sub_category && 'is-invalid'}`} {...register('sub_category',{required:'This field is required'})}>
                                            <option value="">--Select Category--</option>
                                            <option value="none">None</option>
                                            <option value="Bedding">Bedding</option>
                                            <option value="Cushions">Cushions</option>
                                            <option value="Curtains">Curtains</option>
                                        </select>
                                        {errors.sub_category && <span className='invalid-feedback'>{errors.sub_category?.message}</span>}
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-last'>
                                Create
                            </button>
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