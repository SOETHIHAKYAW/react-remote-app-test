import MeetupItemList from "../components/meetups/MeetupItemList";
import { useState } from "react";

function AllMeetupsPage() {
        //state     //function
  const [isLoading,setIsLoading] = useState(true);
  const [loadedMeetups,setLoadedMeetups] = useState([]);

  fetch(
    'https://react-meetup-ec4a4-default-rtdb.firebaseio.com/meetup.json'
  ).then((response)=>{
    return response.json();
  }).then((data)=>{
    setIsLoading(false);
    setLoadedMeetups(data);
  });

  if (isLoading) {
    return (
      <section>
        <p>Page is Loading....</p>
      </section>
    );
  }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupItemList meetupList = {loadedMeetups} />
        </section>
    );
}
export default AllMeetupsPage;