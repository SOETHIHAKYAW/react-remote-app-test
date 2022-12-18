import {Routes,Route} from 'react-router-dom';
import  AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {

  return ( 

    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage></AllMeetupsPage>}></Route>
        <Route path='/new-meetup' element={<NewMeetupPage></NewMeetupPage>}></Route>
        <Route path='/favorites' element={<FavoritesPage></FavoritesPage>}></Route>
      </Routes>
    </Layout>

    );
}

export default App;
