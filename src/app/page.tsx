import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import './globals.css'
import Navber from './components/navber/Navber';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Explore from './components/Explore/Explore';
import DiscoverMore from './components/DiscoverMore/DiscoverMore';


export default function Home() {
  return (
    <div className='' style={{ height: '2500px' }}>
      <Navber />
      <Hero />
      <Gallery />
      <Explore />

      <DiscoverMore />
      {/* -------------------- */}
    </div>
  );
}
