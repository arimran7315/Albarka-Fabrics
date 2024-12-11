import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { apiUrl, fileUrl, token } from '../../common/http';
import { toast } from 'react-toastify'
const Edit = () => {
    const params = useParams();
    const [product, setProduct] = useState('');
    const [imageId, setImageId] = useState(null);
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm();

    // Fetch product data on component load
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(apiUrl + 'products/' + params.id, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();

            if (result.status && result.data.length > 0) {
                const productData = result.data[0]; 
                setProduct(productData);
                setValue('name', productData.name || '');
                setValue('category', productData.category || ''); 
                setValue('sub_category', productData.sub_category || '');
            }
        };

        fetchProduct();
    }, [params.id, setValue]);

    // Image upload handler
    const handleImage = async (e) => {
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
    };

    const onSubmit = async (data) => {
        const newData = {...data, 'imageId': imageId};
        
        const res = await fetch(apiUrl+'products/'+ params.id,{
            method:'PUT',
            headers:{
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
    };

    return (
        <>
            <Header />
            <section className="container py-5">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="card shadow border-0 p-4">
                            <div className="d-flex justify-content-between">
                                <h3>Products / Edit</h3>
                                <Link to='/admin/products' className='btn btn-primary'>Back</Link>
                            </div>
                            <hr />
                            <div className="card-body py-5 product-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                        <label htmlFor="product-image" className="form-label">Image:</label><br />
                                        <input type="file" onChange={handleImage} /> <br />
                                        <img src={fileUrl+'uploads/products/small/'+product.image} className='w-25 mt-2' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="name" className="form-label">Name:</label>
                                        <input type="text" className="form-control" {...register('name')} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="Category" className="label-form">Category<span>*</span>:</label>
                                                <Controller
                                                    name="category"
                                                    control={control}
                                                    rules={{ required: 'This field is required' }}
                                                    render={({ field }) => (
                                                        <select
                                                        {...register('category',{required: 'This field is required'})}
                                                            {...field}
                                                            className={`form-select ${errors.category && 'is-invalid'}` }
                                                        >
                                                            <option value="">--Select Category--</option>
                                                            <option value="fabrics">Fabrics</option>
                                                            <option value="Home Textile">Home Textile</option>
                                                            <option value="Institutional Garments">Institutional Garments</option>
                                                            <option value="Institutional Textile">Institutional Textile</option>
                                                            <option value="Garments">Garments</option>
                                                        </select>
                                                    )}
                                                />
                                                {errors.category && <span className='invalid-feedback'>{errors.category?.message}</span>}
                                            </div>
                                            <div className="col">
                                                <label htmlFor="SubCategory" className="label-form">Sub Category<span>*</span>:</label>
                                                <Controller
                                                    name="sub_category"
                                                    control={control}
                                                    rules={{ required: 'This field is required' }}
                                                    render={({ field }) => (
                                                        <select
                                                        {...register('sub_category',{required: 'This field is required'})}
                                                            {...field}
                                                            className={`form-select ${errors.sub_category && 'is-invalid'}`}
                                                        >
                                                            <option value="">--Select Sub Category--</option>
                                                            <option value="none">None</option>
                                                            <option value="bedding">Bedding</option>
                                                            <option value="cushions">Cushions</option>
                                                            <option value="curtains">Curtains</option>
                                                        </select>
                                                    )}
                                                />
                                                {errors.sub_category && <span className='invalid-feedback'>{errors.sub_category?.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className='btn btn-last'>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Edit;
