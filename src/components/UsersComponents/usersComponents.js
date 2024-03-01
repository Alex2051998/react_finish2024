import React, {useEffect, useState} from 'react';
import {userService} from "../../services/UserServices/userService";
import UserComponent from "../UserComponent/userComponent";

const UsersComponents = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data));
    },[]);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponents;