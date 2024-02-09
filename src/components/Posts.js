import {Post} from "./Post";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};