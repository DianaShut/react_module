import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";

const UsersContainer = () => {
    const [users, setUsers] =useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
        }, []);

    return (
        <div>
            <UserForm/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer}