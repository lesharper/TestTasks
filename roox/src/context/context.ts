import {createContext, useContext} from "react";

export type OrderByCity = {
    orderCity: boolean
    toggleOrderCity: (c: boolean) => void
}

export type OrderByCompany = {
    orderCompany: boolean
    toggleOrderCompany: (c: boolean) => void
}

export interface IOrderByContext {
    orderByCity: OrderByCity
    orderByCompany: OrderByCompany
}

const defaultState = {
    orderByCity: {
        orderCity: false,
        toggleOrderCity: () => {}
    },
    orderByCompany: {
        orderCompany: false,
        toggleOrderCompany: () => {}
    },
};

export const OrderByContext = createContext<IOrderByContext>(defaultState);
export const useOrderByContext = () => useContext<IOrderByContext>(OrderByContext)