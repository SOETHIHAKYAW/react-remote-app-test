import MeetupItemList from "../components/meetups/MeetupItemList";
import { useState,useEffect } from "react";

function AllMeetupsPage() {
        //state     //function
  const [isLoading,setIsLoading] = useState(true);
  const [loadedMeetups,setLoadedMeetups] = useState([]);

  useEffect(()=>{

    setIsLoading(true);

    fetch(
      'https://react-meetup-ec4a4-default-rtdb.firebaseio.com/meetup.json'
    ).then((response)=>{
      return response.json();
    }).then((data)=>{

      const meetupList = [];

      for(const key in data){
        const meetup = {
          id : key,
          ...data[key]
        }
        meetupList.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetupList);
      
    });
    //depedency
  },[]);

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