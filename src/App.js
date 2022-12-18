import {Routes,Route} from 'react-router-dom';
import  AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';
import { useEffect, useState } from "react";
import "./App.css";

function App() {

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return ( 

    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage></AllMeetupsPage>}></Route>
        <Route path='/new-meetup' element={<NewMeetupPage></NewMeetupPage>}></Route>
        <Route path='/favorites' element={<FavoritesPage></FavoritesPage>}></Route>
      </Routes>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </Layout>

    );
}

export default App;
