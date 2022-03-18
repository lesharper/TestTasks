import React, {FC} from 'react';
import Button from "../Button/Button";
import styles from "./control_panel.module.scss"
import {useOrderByContext} from "../../context/context";


const ControlPanel: FC = () => {
    const {orderByCity, orderByCompany} = useOrderByContext()
    const {orderCity, toggleOrderCity} = orderByCity
    const {orderCompany, toggleOrderCompany} = orderByCompany
    return (
        <div className={styles.panel}>
            <span className={styles.title}>Сортировка</span>
            <Button width={86.13} height={24.12} text="По городу" background="#4B51EF" color="#FFF"
                    onClick={() => toggleOrderCity(!orderCity)}/>
            <Button width={105.39} height={24.12} text="По компании" background="#4B51EF" color="#FFF"
                    onClick={() => toggleOrderCompany(!orderCompany)}/>

        </div>
    );
}

export default ControlPanel;