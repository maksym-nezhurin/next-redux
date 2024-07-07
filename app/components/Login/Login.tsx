'use client';

import React, {useEffect, useState} from 'react';
import {Form, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Input} from "@/app/components/FormElements/Input/Input";
import {useFormState, useFormStatus} from "react-dom";
import {sendFormDataToServer, State} from "@/app/actions/actions";
import {useToast} from "@/contexts/ToastContext";
import {Button} from "@/app/components/Button/Button";

const schema = z.object({
    username: z.string()
        .min(2, "Min 2 characters only")
        .max(10, "You can enter up to 10 characters only"),
    password: z.string()
        .min(6)
        .max(100, "Password must be between 6 and 100 characters"),
    email: z.string().email()
});

interface ISubmitData {
    formData: FormData,
    data: Object
}

const fields = [
    {
        component: Input,
        name: 'username',
        label: 'User name'
    }
]

// Define the form component
export const LoginForm = () => {
    const toast = useToast();
    const {register, control, reset, formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    });
    const [submitting, setSubmitting] = useState(false);
    const {pending} = useFormStatus();
    const [state, action] = useFormState<State, FormData>(sendFormDataToServer, null);

    const onSubmit = async ({formData}: ISubmitData) => {
        setSubmitting(true);
        await action(formData);
    };

    useEffect(() => {
        switch (state?.status) {
            case "success":
                toast?.success(state?.message)
                reset()
                break;
            case "error":
                toast?.error(state?.message)
                break;
            default:
                toast?.info(state?.message)
        }
        setSubmitting(false);
    }, [state]);

    return (
        <Form control={control} onSubmit={onSubmit}>
            <div className={'mt-2'}>
                <label htmlFor="username">Enter username:</label>

                <Input
                    id={'username'}
                    type="text"
                    {...register('username')}
                />

                {errors.username && <p className={''}>{errors?.username?.message}</p>}
            </div>

            <div className={'mt-2'}>
                <label htmlFor="email">Enter email:</label>

                <Input
                    id={'email'}
                    type="email"
                    {...register('email')}
                />

                {errors.email && <p>{errors?.email?.message}</p>}
            </div>

            <div className={'mt-2'}>
                <label htmlFor="password">Enter password:</label>

                <Input
                    id={'password'}
                    type="password"
                    {...register('password')}
                />
                {errors.password && <p>{errors?.password?.message}</p>}
            </div>

            <Button type="submit" disabled={submitting}>Send</Button>
        </Form>
    );
};