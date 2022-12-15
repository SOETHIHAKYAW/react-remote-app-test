import {Routes,Route} from 'react-router-dom';
import  AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return ( 

  <div>
    <MainNavigation></MainNavigation>
    <Routes>
      <Route path='/' element={<AllMeetupsPage></AllMeetupsPage>}></Route>
      <Route path='/new-meetup' element={<NewMeetupPage></NewMeetupPage>}></Route>
      <Route path='/favorites' element={<FavoritesPage></FavoritesPage>}></Route>
    </Routes>
    </div>
    );
}

export default App;
