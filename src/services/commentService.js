import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const commentService = {
    getAll: () => apiService.get(urls.comments)
}

export {commentService}