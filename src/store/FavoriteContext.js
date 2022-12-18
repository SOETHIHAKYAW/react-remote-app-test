import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

function FavoritesContextProvider(props) {

    const [userFavorites,setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((previousMeetup)=>{
            return previousMeetup.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((previousMeetup)=>{
           return previousMeetup.filter(meetup => meetup.id !== meetupId);///predicate
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);//predicate
    }

    const context = {
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsVavorite: itemIsFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
    
}
export default FavoritesContextProvider;