import "./App.css";
import Hero from "./Component/HeroSection";
import Introduction from "./Component/Introduction";
import WhyChooseUs from "./Component/WhyChooseUs";
import AreaOfPractices from "./Component/AreaOfPractices";
import Review from "./Component/Review";
import Team from "./Component/Team";
import FAQs from "./Component/FAQs";
import Newsletter from "./Component/Newsletter";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Introduction />
      <WhyChooseUs />
      <AreaOfPractices />
      <Review />
      <Team />
      <FAQs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
