import classes from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <nav className={classes.nav}>
                <span>Home</span>
                <button>+ New Post</button>
            </nav>
        </header>
    )
}