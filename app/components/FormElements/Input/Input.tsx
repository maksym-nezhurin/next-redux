import styles from './Input.module.scss';
import cn from 'classnames';
import { forwardRef } from 'react';
import type { FieldError } from 'react-hook-form';
import type { ForwardedRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: FieldError;
}

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input className={cn(styles.input, {
                [styles.error]: error
            })} ref={ref} {...props} />
            {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});