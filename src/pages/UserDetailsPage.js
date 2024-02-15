import {useLoaderData, useLocation, useParams} from "react-router-dom";

import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const {id} =useParams();
    const {state} = useLocation();
    const {data} = useLoaderData()

    return (
        <div>
            {<UserDetails userDetails={data}/>}
        </div>
    );
};

export {UserDetailsPage};