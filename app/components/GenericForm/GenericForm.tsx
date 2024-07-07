"use client";

import {Controller, FieldErrors, useForm, UseFormRegister} from 'react-hook-form';
import { State } from "@/app/actions/actions";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import {useToast} from "@/contexts/ToastContext";
import React, {useEffect} from "react";
import {ZodSchema} from "zod";
import {Input} from "@/app/components/FormElements/Input/Input";
import {Rating} from "@/app/components/Rating/Rating";

interface IValidationRule {
    value: string | number,
    message: string,
}

interface IField {
    name: string,
    placeholder: string,
    options?: {
        required?: boolean,
        minLength?: IValidationRule,
        maxLength?: IValidationRule,
        optionsList?: { label: string; value: string | number }[];
    },
}

interface IFormProps {
    schema: ZodSchema,
    fields: IField[],
    actionFunction: (prevState: State | null, payload: FormData) => Promise<State>
}

export type FormValues = Record<string, string>;

export function FormContent({
                                fields,
                                register,
                                isValid,
                                control,
                                errors,
                            }: {
    fields: IField[],
    register: UseFormRegister<FormValues>;
    control: any,
    errors: FieldErrors,
    isValid: boolean;
}) {
    const { pending } = useFormStatus();
    console.log('errors', errors);
    return (
        <>
            {
                fields.map((field, index) => (
                    <div className={'my-4'} key={`${field.name}-${index}`}>
                        <span>{field.name}</span>
                        <Controller
                            name={field.name}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => {
                                return <>
                                    <Input {...field} error={undefined}/>
                                    <span>{errors[field.name] ? `${field.name} is required` : null}</span>
                            </>
                            }}
                        />
                    </div>
                ))

            }

            <div>
                <span>Оценка:</span>
                <Controller
                    control={control}
                    name='rating'
                    rules={{required: {value: true, message: 'Укажите рейтинг'}}}
                    render={({field}) => (
                        <Rating
                            isEditable={true}
                            rating={field.value}
                            ref={field.ref}
                            setRating={field.onChange}
                        />
                    )}
                />
            </div>

            <button type="submit" disabled={pending || !isValid}>Send</button>
            {pending && <span>Loading...</span>}
        </>
    );
}

export function GenericForm(props: IFormProps) {
    const {schema, fields, actionFunction} = props;
    const {
        register, handleSubmit,
        control,
        reset,
        formState: {
            isValid,
            errors
        }} = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    const [state, action] = useFormState<State, FormData>(actionFunction, null);
    const toast = useToast();

    useEffect(() => {
        const { status, message } = state || {};

        if (!toast) {
            return;
        }

        switch (status) {
            case "success":
                toast.success(message)
                break;
            case "error":
                toast.error(message)
                break;
            default:
                toast.info(message)
        }
        reset();
    }, [state]);

    return (
        <form action={action}>
            <FormContent register={register} fields={fields} isValid={isValid} control={control} errors={errors} />
        </form>
    )
}
