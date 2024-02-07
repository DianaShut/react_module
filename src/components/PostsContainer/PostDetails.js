const PostDetails =({postDetails:{id, userId, title, body}}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export {PostDetails};