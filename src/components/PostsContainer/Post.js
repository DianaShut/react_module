const Post = ({post, setPostDetails}) => {
    const {id,title} = post;

    return(
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <button onClick={() => setPostDetails(post)}>Details</button>
        </div>
    );
};

export {Post};
