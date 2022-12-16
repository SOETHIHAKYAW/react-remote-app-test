import classes from './NewMeetupForm.module.css';
import Card from '../../ui/Card';

function NewMeetupForm() {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' id='image' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' id='address' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <input type='text' id='description' required />
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>
    );
}
export default NewMeetupForm;