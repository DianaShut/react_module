const Post = ({post}) => {
    const{id, title} =post
    console.log(post)
    return (
        <div>
            <div>{id} - {title}</div>
            <button>details</button>
        </div>
    );
};

export {Post};