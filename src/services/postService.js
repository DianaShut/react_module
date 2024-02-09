import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const postService = {
    getAll: () => apiService(urls.posts.base),
    create: (data) => apiService.post(urls.posts.base, data),
    getById: (id) =>apiService(urls.posts.byId(id))
};

export {postService}