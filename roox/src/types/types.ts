export interface IAddress {
    street: string
    city: string
    zipcode: string
}

export interface ICompany {
    name: string
}

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    company: ICompany
    address: IAddress
    phone: string
    website: string
}

export interface IForm {
    name: string
    username: string
    email: string
    street: string
    city: string
    zipcode: string
    phone: string
    website: string
    comment: string
}
