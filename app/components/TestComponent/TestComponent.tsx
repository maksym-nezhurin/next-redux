'use client'

import {userSchema} from "@/app/schemas/user-schema";
import {GenericForm} from "@/app/components/GenericForm/GenericForm";
import {getFullName} from "@/app/actions/actions";

const fields = [
    {
        name: 'firstName',
        type: 'input',
        placeholder: 'Nslll',
        options: {
            required: true
        }
    },
    {
        name: 'lastName',
        type: 'input',
        placeholder: 'lastName'
    },
    {
        name: 'email',
        type: 'input',
        placeholder: 'email'
    },

]

const formProps = {
    fields: fields,
    schema: userSchema,
    actionFunction: getFullName
}

export const TestComponent = () => {
    return <>
        <GenericForm {...formProps} />
    </>
}