import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name, username, email} = userDetails
    const navigate = useNavigate();
    return (
        <div>
            <div>{id} - {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Address: {userDetails.address.city}, {userDetails.address.street} {userDetails.address.suite}</div>
            <button onClick={()=> navigate('posts')}>post of current user</button>
        </div>
    );
};

export {UserDetails};