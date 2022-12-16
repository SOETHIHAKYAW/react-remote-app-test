import MeetupItem from "./MeetupItem";
import classes from './MeetupItemList.module.css';

function MeetupItemList(props){

    return (
        <ul className={classes.list}>
            {props.meetupList.map(meetup=> <MeetupItem 
                key = {meetup.id}
                id = {meetup.id}
                title = {meetup.title}
                image = {meetup.image}
                address = {meetup.address}
                description = {meetup.description}
            />)}
        </ul>
    );
}
export default MeetupItemList;