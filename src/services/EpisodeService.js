import {apiService} from "./apiService";
import {urls} from "../constans";

const EpisodeService = {
    getAll: (page='1') => apiService.get(urls.episodes.base, {params: {page}}),
    getById: (id) => apiService.get(urls.episodes.byId(id))
}

export {EpisodeService}