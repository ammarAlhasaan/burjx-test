import type {InputHTMLAttributes, ReactNode} from 'react';
import React, {forwardRef} from 'react';
import cn from 'classnames';
import styles from './input.module.scss';

export type InputProps = {
  label?: string;
  className?: string;
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    label,
    className,
    icon,
    id,
    ...props
  }, ref) => {
  const inputId = id || props.name;

  return (
    <div className={cn(styles.wrapper, "card-blur", className)}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className="d-flex ">
        {icon && <div className="flex-center p-3 ">{icon}</div>}
        <input
          ref={ref}
          id={inputId}
          className={cn(styles.input)}
          {...props}
        />
      </div>

    </div>
  );
});

export default Input;
