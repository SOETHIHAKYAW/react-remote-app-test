import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>My Meetup</div>
            <nav>
                <ul>
                    <li>
                        <button className={classes.button}>
                            <Link to='/'>AllMeetups</Link>
                        </button>
                    </li>
                    <li>
                        <button className={classes.button}>
                            <Link to='/new-meetup'>New Meetup</Link>
                        </button>
                    </li>
                    <li>
                        <button className={classes.button}>
                            <Link to='/favorites'>Favorites</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;