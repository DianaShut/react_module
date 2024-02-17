import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user
    const navigate = useNavigate()
    return (
        <div>
            <div>{id} - {name}</div>
            <button onClick={() => navigate(id.toString())}>view more</button>
        </div>
    );
};

export {User};