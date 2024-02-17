const UserDetails = ({userDetails}) => {
    const {id, name, username, email} = userDetails
    return (
        <div>
            <div>{id} - {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Address: {userDetails.address.city}, {userDetails.address.street} {userDetails.address.suite}</div>
            <button>post of current user</button>
        </div>
    );
};

export {UserDetails};