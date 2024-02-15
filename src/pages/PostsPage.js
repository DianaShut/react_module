import {useEffect, useState} from "react";

import {useLocation} from "react-router-dom";
import {postService} from "../services/postService";
import {Post} from "../components/PostsContainer/Post";

const PostsPage = () => {
    const [post, setPosts] = useState(null);
    const {state: {postId}} = useLocation();

    useEffect(() => {
        postService.byId(postId).then(({data}) => setPosts(data))
    }, [postId]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostsPage};