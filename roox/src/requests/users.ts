import axios from "axios";
import {IUser} from "../types/types";

export const fetchUsers = async (setUsers:Function) => {
    try {
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
    }catch (error) {
        console.log(error)
    }
}

export const fetchOneUser = async (id: string | undefined, setUser:Function) => {
    try {
        const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(response.data)
    }catch (error) {
        console.log(error)
    }
}

