import FourthSection from "./components/FourthSection";
import InfiniteScroll from "./components/InfiniteScroll";
import ThirdSection from "./components/ThirdSection";
import PricingSection from "./components/PricingSection";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <InfiniteScroll />
      <ThirdSection />
      <FourthSection />
      <PricingSection />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
