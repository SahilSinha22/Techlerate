import Intro from "@/components/Intro"
import Banner from "@/components/banner"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"
import Graphic from "@/components/Graphic"
import Digital from "@/components/Digital"
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Started from "@/components/Started";

export default function Home() {
  return (
    <>
   <Intro/>
   <Banner/>
   <Portfolio/>
   <Services/>
   <Graphic/>
   <Digital/>
  <Testimonial/>
  
   
   <Blog/>
   <Started/>
   </>
  );
}
