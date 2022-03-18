import {IUser} from "../types/types";

export const ByCity = (x: IUser, y: IUser) => {
    if (x.address.city < y.address.city) {return -1;}
    if (x.address.city > y.address.city) {return 1;}
    return 0;
}
export const ByCompany = (x: IUser, y: IUser) => {
    if (x.company.name < y.company.name) {return -1;}
    if (x.company.name > y.company.name) {return 1;}
    return 0;
}