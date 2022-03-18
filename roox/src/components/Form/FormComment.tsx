import React, {FC, useEffect} from 'react';
import { useFormContext } from 'react-hook-form';
import styles from "./form.module.scss";

interface FormFieldProps {
    title: string
    registerName: string
    edit:boolean
    mock: string | undefined
}
const FormComment: FC<FormFieldProps> = ({title, registerName, edit, mock}) => {
    const { register, formState, setValue} = useFormContext();
    useEffect(() => {
        setValue(registerName, mock);
    }, [mock])
    const {errors} = formState
    return (
        <div className={styles.form_group}>
            <label className={styles.form_title}>{title}</label>
            <textarea
                disabled = {!edit}
                {...register(registerName)}
                className={styles.form_comment}
                style={errors[registerName] ? {border: "1px solid red"} : {}}
                placeholder={errors[registerName]?.message}
            />
        </div>
    );
}

export default FormComment;