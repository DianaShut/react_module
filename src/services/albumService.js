import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const albumService = {
    getAll: () => apiService.get(urls.albums)
}

export {albumService}