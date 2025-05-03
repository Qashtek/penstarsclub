import {
  Nav,
  Header,
  Brands,
  About,
  Services,
  Reviews,
  CTA,
  Footer,
} from "./sections";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Header />
      <About />
      <Brands />
      <Services />
      <Reviews /> {/* carousel*/}
      <CTA /> {/* contact*/}
      <Footer />
    </div>
  );
};

export default App;
