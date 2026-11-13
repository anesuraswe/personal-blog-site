import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogList />
      <About/>
      <Footer/>
    </>
  );
}

export default App;
