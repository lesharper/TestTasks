import React, {FC, useEffect, useMemo, useState} from 'react';
import styles from "./form.module.scss"
import { useForm, FormProvider} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {IForm, IUser} from "../../types/types"
import { schema } from './validationSchema';
import Button from "../Button/Button";
import FormField from "./FormField";
import FormComment from "./FormComment";

interface FormProps {
    data: IUser | undefined
}

const Form: FC<FormProps> = ({data}) => {
    const {
        register,
        formState: { errors }
    } = useForm<IForm>({
        mode: "onTouched",
        resolver: yupResolver(schema)
    });

    const methods = useForm<IForm>({mode:"onTouched",resolver: yupResolver(schema)});

    const onSubmit = (formData: IForm) => console.log(JSON.stringify(formData));

    const [edit, setEdit] = useState<boolean>(false)

    const allowСhanges = () => {
        setEdit(true)
    }

    return (
        <FormProvider {...methods} >
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.title}>Профиль пользователя</span>
                    <Button type={"button"} width={116.67} height={27.12} text="Редактировать" color="#FFF" background="#4B51EF" onClick={allowСhanges}/>
                </header>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className={styles.form_wrapper}>
                        <FormField title="Name" registerName="name" edit={edit} mock={data?.name}/>
                        <FormField title="User name" registerName="username" edit={edit} mock={data?.username}/>
                        <FormField title="Email" registerName="email" edit={edit} mock={data?.email}/>
                        <FormField title="Street" registerName="street" edit={edit} mock={data?.address.street}/>
                        <FormField title="City" registerName="city" edit={edit} mock={data?.address.city}/>
                        <FormField title="Zip code" registerName="zipcode" edit={edit} mock={data?.address.zipcode}/>
                        <FormField title="Phone" registerName="phone" edit={edit} mock={data?.phone}/>
                        <FormField title="Website" registerName="website" edit={edit} mock={data?.website}/>
                        <FormComment title="Comment" registerName="comment" edit={edit} mock={undefined}/>
                    </div>
                    <footer className={styles.footer}>
                        <Button
                            type={"submit"}
                            width={85}
                            height={24.12}
                            text="Отправить"
                            color="#FFF"
                            background="#52CF4F"
                            onClick={methods.handleSubmit(onSubmit)}
                            disabled={!edit}
                        />
                    </footer>
                </form>
            </div>
        </FormProvider>


    )
}

export default Form;