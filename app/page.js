import Features from "./dashboard/_component/Features";
import Footer from "./dashboard/_component/Footer";
import HeroSection from "./dashboard/_component/HeroSection";
import Testimonial from "./Testimonial";
import Hiw from "./dashboard/_component/Hiw";

export default function Home() {
  return (
    <div className="bg-black" >
      
      <HeroSection/>
      <Hiw/>
      <Features/>
      <Testimonial/>

      <Footer/>
    </div>
  );
}
