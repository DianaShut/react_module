import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const userService = {
    getAll:() => apiService(urls.users.base),
    create: (data) => apiService.post(urls.users.base, data)
}

export {userService}

