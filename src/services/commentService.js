import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const commentService = {
    getAll:() => apiService.get(urls.comments.base),
    getByPostId:(postId) => apiService.get(urls.comments.base,{params:{postId}})
}

export {commentService}