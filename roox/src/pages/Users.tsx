import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import {fetchUsers} from "../requests/users";
import UsersList from "../components/UsersList/UsersList";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import {OrderByContext} from "../context/context";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers(setUsers)
    }, [])


    const [orderByCity, setOrderByCity] = useState(false)
    const [orderByCompany, setOrderByCompany] = useState(false)

    const defaultValue = {
        orderByCity: {orderCity: orderByCity, toggleOrderCity: setOrderByCity},
        orderByCompany: {orderCompany: orderByCompany, toggleOrderCompany: setOrderByCompany}
    }
    return (
        <div style={{display: "flex"}}>
            <OrderByContext.Provider value={defaultValue}>
                <ControlPanel/>
                <UsersList users={users}/>
            </OrderByContext.Provider>
        </div>
    );
}

export default Users;