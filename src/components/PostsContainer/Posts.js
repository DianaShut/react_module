import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services/UserService";

import {Post} from "./Post";

const Posts = () => {
    const {state:{userId}} = useLocation(); //отримали об'єкт, в якому є state, де знаходиться наш об'єкт user

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getPostById(userId).then(({data}) => setPosts(data))
    }, [userId]);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};