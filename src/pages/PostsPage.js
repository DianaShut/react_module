import {Posts} from "../components/PostsContainer/Posts";
import {useParams} from "react-router-dom";

const PostsPage = () => {
    const {id} = useParams()
    return (
        <div>
            <Posts userId={id}/>
        </div>
    );
};

export {PostsPage};