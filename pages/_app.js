import Navbar from '../components/Navbar'
import { ParticleBackground } from '../components/ParticleJs/particleBackground';
import '../styles/globals.css'
import dynamic from "next/dynamic";
 const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
   ssr: false,
 });
 

function MyApp({ Component, pageProps }) {
 
  return (
    <>
      <ParticleBackground></ParticleBackground>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="86, 81, 229"
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={5}
        trailingSpeed={10}
        
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
