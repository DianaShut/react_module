import axios from "axios";
import {jsonBaseURL} from "../constans/urls";

const jsonAPIService = axios.create({baseURL: jsonBaseURL});

export {jsonAPIService}