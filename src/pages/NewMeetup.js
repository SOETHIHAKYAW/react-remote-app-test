import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router";



function NewMeetupPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
    
        fetch(
            'https://react-meetup-ec4a4-default-rtdb.firebaseio.com/meetup.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then(()=>{
            navigate('/');
        });
    }

    return (
       <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup = {addMeetupHandler} />
       </div>
    );
}
export default NewMeetupPage;