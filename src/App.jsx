import BarraNavegacion from "./components/navbar"
import QueHacemos from "./components/queHacemos"
// import Do from "./components/do"
// import Banner from "./components/banner"
import Banner2 from "./components/banner2"
import ContactForm from "./components/contact"
import QuienesSomos from "./components/aboutUs"
import Footer from "./components/footer"
import Entidades from "./components/entidades"

function App() {
  return (
    <>
      <BarraNavegacion />
      {/* <Banner /> */}
      <Banner2 />
      <QuienesSomos />
      <QueHacemos />
      {/* <Do /> */}
      <Entidades />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
