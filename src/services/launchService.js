import {spaceXAPIService} from "./spaceXAPIService";
import {urls} from "../constans/urls";

const launchService= {
    getAll:() => spaceXAPIService.get(urls.launches)
}

export {launchService}



