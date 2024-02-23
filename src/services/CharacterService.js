import {apiService} from "./apiService";
import {urls} from "../constans";

const CharacterService = {
    getAll: () => apiService.get(urls.characters.base),
    getByIds: (ids) => apiService.get(urls.characters.byId(ids))
}

export {CharacterService}