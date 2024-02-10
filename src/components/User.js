const User = ({user}) => {
    let {id, name, username} =user;
    return (
        <div>
            <div>Id: {id}</div>
            <div>{name}</div>
            <div>Username: {username}</div>
        </div>
    );
};

export {User};