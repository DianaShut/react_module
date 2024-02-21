import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {registerValidator} from "../../validators";
import {authService} from "../../services";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const [error, setError] = useState(null) //якщо юзер вже є
    const {register,handleSubmit, formState:{errors, isValid}} = useForm({
        mode:'all',
        resolver:joiResolver(registerValidator)
    })

    const navigate = useNavigate();

    const save = async(user) =>{
        try {
            await authService.register(user)
            navigate('/login')
        } catch (e) { //якщо бекенд відповість помилкою(коли юзер з таким ім'ям вже є)
            console.log(e.response.data);
            setError(true)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <div>Username: <input type="text" {...register('username')}/></div>
                {error && <div>Username already exists</div>}
                {errors.username && <div>{errors.username.message}</div>}
                <div>Password: <input type="text" {...register('password')}/></div>
                {errors.password && <div>{errors.password.message}</div>}
                <div>Confirm password: <input type="text" {...register('re_password')}/></div>
                {errors.re_password && <div>{errors.re_password.message}</div>}
                <button disabled={!isValid}>Register</button>
            </form>
        </div>
    );
};

export {RegisterForm};