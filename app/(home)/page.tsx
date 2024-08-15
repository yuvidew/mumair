import { About } from "./_components/About";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Project } from "./_components/Project";
import { Services } from "./_components/Services";
import { Testimonials } from "./_components/Testimonials";

export default function Home() {
  return (
    <div> 
      <Header/>
      <div className=" container">
        <Hero/>
        <About/>
        <Services/>
        <Project/>
      </div>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
