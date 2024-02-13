const Post = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export {Post};