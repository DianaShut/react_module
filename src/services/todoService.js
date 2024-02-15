import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const todoService = {
    getAll: () => apiService.get(urls.todos)
}

export {todoService}