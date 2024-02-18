import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user
    const navigate = useNavigate()
    return (
        <div>
            <div>{id} - {name}</div>
            <button onClick={() => navigate(`/users/${id}`)}>view more</button>
        </div>
    );
};

export {User};