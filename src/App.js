import './App.css';

import Header from './components/header';
import Vedalife from './components/vedalife';
// import Home from './components/home';
import NewYear from './components/newYear';
import Festival from './components/festival';
import Mandarin from './components/mandarin';
import ProgrammFestival from './components/programmFestival';
import Description from './components/description';
import Cooking from './components/cooking';
import Speakers from './components/speakers';
import Registraition from './components/registraition';
import Price from './components/price';
import Footer from './components/footer';
import Video from './components/video';
import Reviews from './components/reviews';
import Hram from './components/hram';
import Slider1 from './components/slider1';
import Slider2 from './components/slider2';
import Recomendation from './components/recomendation';
import HomeBaner from './components/homeBaner';

function App() {
  return (
    <div>
      <Header />
      <HomeBaner />
      {/* <Home /> */}
      <Vedalife />
      <Video />
      <NewYear />
      <Festival />
      <Mandarin />
      <ProgrammFestival />
      <Speakers />
      <Recomendation />
      <Description />
      <Cooking />
      <Reviews />
      <Hram />
      <Slider1 />
      <Slider2 />
      <Price />
      <Registraition />
      <Footer />
    </div>
  );
}

export default App;
