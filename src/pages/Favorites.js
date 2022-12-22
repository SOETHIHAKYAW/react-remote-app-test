import MeetupItemList from "../components/meetups/MeetupItemList";
import { useContext } from "react";
import FavoritesContext from "../store/FavoriteContext";

function FavoritesPage() {

    const favoriteContext = useContext(FavoritesContext);

    let content;

    if (favoriteContext.totalFavorites === 0) {
        content = (
            <section>
                <h1>No Favorite Meetups</h1>

                <p>Please Add Some Favorites Meetup First!</p>
            </section>
        );
    }else{
        content = (
        <section>
             <h1>Favorite Meetups</h1>

             <MeetupItemList meetupList = {favoriteContext.favorites} />

        </section>
        );
    }

    return content; //dynamic return
}
export default FavoritesPage;