import classes from './Card.module.css';
import { ReactNode, FC } from 'react';

export const Card: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <article className={classes.card}>
            {children}
        </article>
    )
};