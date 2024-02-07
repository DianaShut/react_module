import React, {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "./Post";
import {PostDetails} from "./PostDetails";

const Posts = () =>{
    const [posts, setPosts] = useState([])

    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll()
            .then(({data}) => setPosts(data))
    }, []);


return(
    <div>
        <div>
            {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails} />)}
        </div>
        {postDetails&&<PostDetails postDetails={postDetails}/>}
    </div>
)
};

export {Posts}