import { createElement, ElementType, HTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonTypes = 'primary' | 'secondary' | 'tertiary';

const ButtonStylesPerType: Record<ButtonTypes, string> = {
    primary: 'bg-slate-900 text-slate-200',
    secondary: 'bg-slate-300',
    tertiary: 'bg-inherit text-inherit',
};

type ButtonProps<ElementTag extends string = 'button'> = HTMLProps<
    ElementType<ElementTag>
> & {
    children: ReactNode;
    type?: ButtonTypes;
    as?: string;
};

function Button(props: ButtonProps) {
    const { type = 'primary', as = 'button', className, children, ...restProps } = props;

    return createElement(
        as,
        {
            className: twMerge(
                `p-4 w-auto ${ButtonStylesPerType[type]} rounded-xl text-center font-bold ${className}`
            ),
            ...restProps,
        },
        children
    );
}

export default Button;
