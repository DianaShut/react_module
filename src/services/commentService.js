import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const commentService = {
    getAll:() => apiService.get(urls.comments.base),
    getById:(id) => apiService.get(urls.comments.byId(id))
}

export {commentService}