'use client';

import { clx } from '@/libs/utils';
import React, { useContext } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { FormCheckerContext } from '@/components/FormCheckerProvider';

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { pending } = useFormStatus();
    const myContext = useContext(FormCheckerContext);

    return (
        <button
            disabled={pending || (myContext && myContext.valid)}
            {...props}
            className={clx(
                'bg-white text-black border-gray-600 border px-8 transition-colors py-2 rounded-md font-semibold',
                'hover:bg-black hover:text-white hover:border-white',
                'disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-600 hover:disabled:border-gray-600 disabled:text-black disabled:bg-gray-600',
                'hover:disabled:bg-gray-600 hover:disabled:text-black',
                props.className
            )}
        />
    );
}
