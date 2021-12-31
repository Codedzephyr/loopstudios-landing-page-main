import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MiddleSection from "./Components/MiddleSection";
import ThirdSection from "./Components/ThirdSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MiddleSection />
      <ThirdSection />
      <Footer/>
    </div>
  );
}

export default App;
