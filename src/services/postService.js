import {jsonAPIService} from "./jsonAPIService";
import {urls} from "../constans/urls";

const postService = {
    getAll:()=>jsonAPIService.get(urls.posts)
}

export {postService}