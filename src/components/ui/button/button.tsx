import React, {forwardRef} from 'react';
import cn from 'classnames';

import styles from './button.module.scss';

export type ButtonProps = {
  status?: 'default' | 'info' | 'primary' | 'warning' | 'error' | 'success' | 'invert';
  kind?: 'filled' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  radius?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.Ref<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      status = 'primary',
      kind = 'filled',
      disabled = false,
      isLoading = false,
      size = 'md',
      className,
      radius = true,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(styles.button, styles[`${kind}`], styles[`${status}`], styles[`${size}`], {[styles.radius]: radius}, className)}
        onClick={onClick}
        disabled={disabled || isLoading}
        data-loading={isLoading}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button
