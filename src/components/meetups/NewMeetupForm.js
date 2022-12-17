import classes from './NewMeetupForm.module.css';
import Card from '../../ui/Card';
import { useRef } from 'react';

function NewMeetupForm() {

    const titleInputRefrence = useRef();
    const imageInputRefrence = useRef();
    const addressInputRefrence = useRef();
    const descriptionInputRefrence = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRefrence.current.value;
        const enteredImage = imageInputRefrence.current.value;
        const enteredAddress = addressInputRefrence.current.value;
        const enteredDescription = descriptionInputRefrence.current.value;

        const meetup = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }; //object

        console.log(meetup); //output object(action) with console
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' ref={titleInputRefrence} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' id='image' ref={imageInputRefrence} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' id='address' ref={addressInputRefrence} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea 
                        id='description'
                        rows='6'
                        ref={descriptionInputRefrence}
                        required
                     />
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>
    );
}
export default NewMeetupForm;