import Intro from "@/components/Intro"
import Banner from "@/components/banner"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"
import Graphic from "@/components/Graphic"
import Digital from "@/components/Digital"
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Started from "@/components/Started";
import DumyForm from "@/components/dumyForm"
import Form from "@/components/Form"

export default function Home() {
  return (
    <main>
  
   <Intro/>

   <Banner/>
   <Portfolio/>
   <Services/>
   <Graphic/>
   <Digital/>
 
  
   <DumyForm/>
   <Blog/>
   <Form/>
   </main>
  );
}
