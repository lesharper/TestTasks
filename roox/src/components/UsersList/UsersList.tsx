import React, {FC} from 'react';
import {IUser} from "../../types/types";
import UsersItem from "../UsersItem/UsersItem";
import styles from "./users_list.module.scss"
import {useOrderByContext} from "../../context/context";
import { ByCity, ByCompany } from '../../utils/orderBy';


interface UsersListProps {
    users: IUser[]
}

const UsersList: FC<UsersListProps> = ({users}) => {
    const {orderByCity, orderByCompany} = useOrderByContext()
    const {orderCity} = orderByCity
    const {orderCompany} = orderByCompany
    const usersCopy = [...users]

    const order = orderCity ? usersCopy.sort(ByCity) : orderCompany ? usersCopy.sort(ByCompany) : users
    const Users = order.map(user => <UsersItem user={user} key={user.id}/>)
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <span className={styles.title}>Список пользователей</span>
            {users.length ? Users : <div className={styles.title}>Загрузка...</div>}
            <span className={styles.count}>Найдено {users.length} пользователей</span>
        </div>
    );
}

export default UsersList;