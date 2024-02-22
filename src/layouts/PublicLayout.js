import {Navigate, Outlet} from "react-router-dom";
import {authService} from "../services";

const PublicLayout = () => {
    const token = authService.getToken();

    //якщо ми маємо токен, тобто залоговані, то нас відразу перекине на кари
    if (token){
        return <Navigate to={'/cars'}/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {PublicLayout};