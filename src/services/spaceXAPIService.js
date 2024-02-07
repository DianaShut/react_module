import axios from "axios";
import {spaceXBaseUrl} from "../constans/urls";

const spaceXAPIService= axios.create({baseURL: spaceXBaseUrl})

export {spaceXAPIService}