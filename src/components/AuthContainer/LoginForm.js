import {useForm} from "react-hook-form";
import {useState} from "react";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const login = async (user) => {
        try{
            await authService.login(user)
            navigate('/cars')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                {error && <div>Username or password incorrect</div>}
                <div>Username: <input type="text" {...register('username')}/></div>
                <div>Password: <input type="text" {...register('password')}/></div>
                <div>Confirm password: <input type="text" {...register('re_password')}/></div>
                <button>Login</button>
            </form>
        </div>
    );
};

export {LoginForm};