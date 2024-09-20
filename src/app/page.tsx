import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import './globals.css'
import Navber from './components/navber/Navber';
import Hero from './components/Hero/Hero';


export default function Home() {
  return (
    <div style={{ height: '1500px' }}>
      <Navber />
      <Hero />

      {/* -------------------- */}
    </div>
  );
}
