import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {postService} from "../../services/postService";
import {Post} from "./Post";


const Posts = () => {
    const [post, setPosts] = useState(null);
    const {state: {postId}} = useLocation();

    useEffect(() => {
        postService.byId(postId).then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};