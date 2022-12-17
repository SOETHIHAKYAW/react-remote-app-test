import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Layout(props) {
    return (
        
        <div>
            <MainNavigation />

            <Container>
            <Row>
                <Col>
                    <div>
                        <Link to='/'>
                        <button className={classes.button}>
                            AllMeetups
                        </button>
                        </Link>
                    </div>
                    <div>
                    <Link to='/new-meetup'>
                        <button className={classes.button}>
                            New Meetup
                        </button>
                     </Link>
                    </div>
                    <div>
                    <Link to='/favorites'>
                        <button className={classes.button}>
                            Favorites
                        </button>
                    </Link>
                    </div>
                </Col>
                <Col>
                <main className={classes.main}>
                {props.children}
                 </main>
                </Col>
            </Row>
            </Container>
        </div>
    );
    
}
export default Layout;