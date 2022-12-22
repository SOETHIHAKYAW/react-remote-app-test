import classes from './MeetupItem.module.css';
import Card from '../../ui/Card';
import { useContext } from 'react';
import FavoritesContextProvider from '../../store/FavoriteContext';

function MeetupItem(props) {

    const favoriteContext = useContext(FavoritesContextProvider);
    
    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

    function toggleFavoriteHandler() {
        if(itemIsFavorite){
            favoriteContext.removeFavorite(props.id);
        }else{
            favoriteContext.addFavorite(
                {
                    id : props.id,
                    image : props.image,
                    title : props.title,
                    address : props.address,
                    description : props.description,
                }
            );
        }
    }
    

    return (
        <Card>
            <li className={classes.item} key={props.id}>
                <div className={classes.image}>
                    <img src={props.image} alt="meetup"></img>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteHandler}> {itemIsFavorite ? 'Remove From Favorite' : 'Add To Favorites'}</button>
                    {/* <button>Add To Favorites</button> */}
                </div>
            </li>
        </Card>
    );
}
export default MeetupItem;