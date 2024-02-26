import {apiService} from "./apiService";
import {urls} from "../constans";

const EpisodeService = {
    getAll: (page) => apiService.get(urls.episodes.base, {params: {page}})
}

export {EpisodeService}