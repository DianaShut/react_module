import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const postService = {
    byId: (id) => apiService.get(urls.posts.byId(id))
};

export {postService}