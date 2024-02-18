import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const{id, title} =post
    const navigate = useNavigate()
    return (
        <div>
            <div>{id}. Title: {title}</div>
            <button onClick={() => navigate(`/posts/${id}`)}>details</button>
        </div>
    );
};

export {Post};