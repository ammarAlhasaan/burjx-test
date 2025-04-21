import type {ReactNode} from 'react';
import React from 'react';
import cn from 'classnames';
import styles from "./badge.module.scss";

export type BadgeProps = {
  /**
   * The content to display inside the badge.
   * This can include text, other components, or any valid React node.
   */
  children?: ReactNode;

  /**
   * The status of the badge, which determines the visual style and color.
   * Options:
   * - 'default' - neutral style
   * - 'info' - informational message
   * - 'primary' - primary badge style
   * - 'warning' - badge indicating a warning
   * - 'error' - badge indicating an error
   * - 'success' - badge indicating success
   */
  status?: 'default' | 'info' | 'primary' | 'warning' | 'error' | 'success';

  /**
   * The size of the badge, which determines padding and font size.
   * Options:
   * - 'sm' - small
   * - 'md' - medium (default)
   * - 'lg' - large
   * - 'xl' - extra-large
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Optional title for the badge.
   * This is typically displayed at the top of the badge content.
   */
  title?: string;

  /**
   * Optional additional class names to apply to the badge component.
   * Useful for custom styling or additional styling rules.
   */
  className?: string;

  /**
   * If true, the badge uses an inverted color scheme.
   * Typically, this would be light text on a dark background.
   */
  invert?: boolean;

  /**
   * An optional icon to display alongside the badge content.
   * This can be any valid React node, such as an icon component.
   */
  icon?: ReactNode;
};

const Badge = (
  {
    children,
    title,
    status = 'default',
    className,
    invert,
    size = 'md',
    icon,
  }: BadgeProps) => {

  return (
    <div
      className={cn(
        styles.badge,
        styles.filled,
        styles[`${size}`],
        styles[`${status}`],
        status,
        {[styles.invert]: invert},
        className
      )}
    >

      {(icon || title || children) && <div className={cn(styles.content)}>
        {icon && (
          <div className={cn(styles.icon)}>
            {icon}
          </div>
        )}
        {title && (
          <span>{title}</span>
        )}
        {children}
      </div>}
    </div>
  );
}

export default Badge;
