import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {postService} from "../services/postService";
import {PostDetails} from "../components/PostsContainer/PostDetails";
import {Comments} from "../components/CommentsContainer/Comments";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        postService.getById(id).then(({data}) => setPostDetails(data))
    }, [id]);

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
            <hr/>
            <Comments/>
        </div>
    );
};

export {PostDetailsPage};