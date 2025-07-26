import Blog from "./components/Blog";
import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import FooterTop from "./components/FooterTop";
import Hero from "./components/Hero";
import Land from "./components/Land";
import LoanProducts from "./components/LoanProducts";
import Nav from "./components/Nav";
import PastProjects from "./components/PastProjects";
import Reviews from "./components/Reviews";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LoanProducts />
      <Land />
      <ChooseUs />
      <Reviews />
      <PastProjects />
      <Work />
      <Blog />
      <FooterTop />
      <Footer />
    </>
  );
}
