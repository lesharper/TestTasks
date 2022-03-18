import React, {useEffect, useState} from 'react';
import Form from "../components/Form/Form";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import {useParams} from "react-router-dom";
import {IUser} from "../types/types";
import {fetchOneUser} from "../requests/users";

const Profile = () => {
    const {id} = useParams()
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        fetchOneUser(id, setUser)
    }, [])

    return (
        <div style={{display: "flex"}}>
            <ControlPanel/>
            <Form data={user}/>
        </div>
    );
}

export default Profile;