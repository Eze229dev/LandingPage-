import { Branding } from './components/Branding';
import { CallToAction } from './components/CallToAction';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BullePoints} from './components/BullePoints';
import {Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Branding/>
      <Features/>
      <CallToAction/>
      < BullePoints/>
      <Pricing />
       <CallToAction minify/>
       <Footer/>
    </>
  );
}

export default App;
