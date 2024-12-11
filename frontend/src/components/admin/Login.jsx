import React, { useContext } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { AuthContext } from './context/Auth'
import { useForm } from "react-hook-form";
import { apiUrl } from '../common/http';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {login} = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async data =>{
        const res = await fetch(apiUrl+'login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
             },
             body: JSON.stringify(data)
        });
        const result = await res.json();
        if(result.status == false){
            toast.error(result.message);
        }else{
            const userInfo = {
                id: result.id,
                token: result.token
            }
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            login(userInfo)
            navigate('/admin/dashboard')
        }
    };
    return (
        <>
            <Header />
            <section className="login-form py-5">
                <div className="container py-5">
                    <div className="card shadow border-0 p-4 w-25 m-auto">
                        <h4>Welcome 👋</h4>
                        <hr />
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input type="text" className={`form-control ${errors.email && 'is-invalid'}`} {...register("email",{required:"This field is required"})} />
                                    {errors.email && <span className="invalid-feedback">{errors.email?.message}</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" className={`form-control ${errors.password && 'is-invalid'}`} {...register("password",{required:"This field is required"})}/>
                                    {errors.password && <span className="invalid-feedback">{errors.password?.message}</span>}
                                </div>
                                <div className="row">
                                    <div className="col mt-3">
                                        <button type='submit' className='btn btn-primary'>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Login