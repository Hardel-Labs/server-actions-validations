'use client';

import React, { useContext, useEffect } from 'react';
import { clx } from '@/libs/utils';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { FormCheckerContext } from '@/components/FormCheckerProvider';

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { validate?: string }) {
    const { pending } = useFormStatus();
    const { setKeyValue } = useContext(FormCheckerContext);

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.id && props.validate) {
            setKeyValue(props.id, new RegExp(props.validate).test(e.target.value));
        }

        props.onChange?.(e);
    };

    useEffect(() => {
        if (props.id && props.validate) {
            setKeyValue(props.id, false);
        }
    }, [props.id, props.validate, setKeyValue]);

    return (
        <input
            disabled={pending}
            {...props}
            onChange={handle}
            className={clx(
                'peer bg-black w-full text-sm border-2 border-solid border-zinc-700 rounded-md px-4 py-2 text-white',
                'focus:outline-none focus:border-white',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                props.className
            )}
        />
    );
}
