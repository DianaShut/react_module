import {apiService} from "./apiService";
import {urls} from "../constans";

const CharacterService = {
    getByIds: (ids) => apiService.get(urls.characters.byId(ids))
}

export {CharacterService}