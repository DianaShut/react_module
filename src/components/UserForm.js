import {useForm} from "react-hook-form";
import {userService} from "../services/userService";

const UserForm = () => {
    const {register,reset, handleSubmit} = useForm();

    const save = async (user) => {
        await userService.create(user)
        console.log(user)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export {UserForm};