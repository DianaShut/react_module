import {useForm} from "react-hook-form";
import {postService} from "../services/postService";
import {logDOM} from "@testing-library/react";

const PostForm = ({setPosts}) => {
    const {reset, register, handleSubmit} = useForm();

    const save = (post) =>{
        postService.create(post).then(({data}) => setPosts(prev => ([...prev, post])));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'title'} {...register('title')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export {PostForm};