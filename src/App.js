import './App.css';
import {useState} from "react";


export default function App () {
    let [formState, setFormState] = useState({login: '', password: ''});

    function onSubmit(e) {
        console.log(e.target.login.value);
        console.log(e.target.password.value);
        e.preventDefault();
        console.log(formState);
    }

    function onChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'login'} value={formState.login} onChange={onChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={onChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
}
