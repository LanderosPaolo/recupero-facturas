import BarraNavegacion from "./components/navbar";
import Do from "./components/do";
import Banner from "./components/banner";
import ContactForm from "./components/contact";
import QuienesSomos from "./components/aboutUs";
import Footer from "./components/footer";
import Entidades from "./components/entidades";

function App() {
  return (
    <>
      <BarraNavegacion />
      <Banner />
      <QuienesSomos />
      <Do />
      <Entidades />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
