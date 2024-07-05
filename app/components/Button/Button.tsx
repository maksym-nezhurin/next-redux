import cn from "classnames";

import styles from './Button.module.scss';
import {ReactNode} from "react";

interface IButton {
    children: ReactNode,
    type: 'button' | 'submit',
    disabled: boolean,
}

export const Button = (props: IButton) => {
    const { type = 'submit', children, disabled} = props;

    return <button className={cn(styles.button, 'button')} type={type} disabled={disabled}>{children}</button>
}