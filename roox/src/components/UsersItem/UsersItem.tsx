import React, {FC} from 'react';
import {IUser} from "../../types/types";
import styles from "./users_item.module.scss"
import {Link} from "react-router-dom";

interface UsersItemProps {
    user: IUser
}

const UsersItem: FC<UsersItemProps> = ({user}) => {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <span className={styles.text}>ФИО:</span>
                <span className={styles.text}>{user.name}</span>
            </section>
            <section className={styles.section}>
                <span className={styles.text}>Город:</span>
                <span className={styles.text}>{user.address.city}</span>
            </section>
            <section className={styles.section}>
                <span className={styles.text}>Компания:</span>
                <span className={styles.text}>{user.company.name}</span>
                <Link to={`/profile/${user.id}`} className={styles.link}>Подробнее</Link>
            </section>
        </div>
    );
}

export default UsersItem;