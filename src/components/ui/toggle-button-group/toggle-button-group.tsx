import type {ReactNode} from 'react';
import React from 'react';
import cn from 'classnames';
import styles from './toggle-button-group.module.scss';

export type ToggleButtonOption<T = string> = {
  label: ReactNode;
  value: T;
};

export type ToggleButtonGroupProps<T = string> = {
  options: ToggleButtonOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

const ToggleButtonGroup = <T extends string | number>(
  {
    options,
    value,
    onChange,
    className,
  }: ToggleButtonGroupProps<T>) => {
  return (
    <div className={cn(styles.group, className)}>
      {options.map((option) => (
        <button
          key={String(option.value)}
          className={cn(styles.button, {
            [styles.active]: option.value === value,
          }, "text-xs")}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
