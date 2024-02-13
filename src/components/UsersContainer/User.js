import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id,name, username, email} = user;

    const navigate = useNavigate();
    return (
        <div>
            <div>Id: {id}</div>
            <div>{name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <button onClick={() => navigate('posts', {state: {userId:id}})}>View post</button>
        </div>
    );
};

export {User};