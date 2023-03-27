import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <nav className={classes.nav}>
                <Link className={classes.link} to={'/'}>Home</Link>
                <Link to={'/new'}><button>+ New Post</button></Link>
            </nav>
        </header>
    )
}