import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {User} from "./User";

const Users = ({users}) => {

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};