import { Logo } from "./components/Logo"
import { Buttons } from "./components/Buttons"
import { Controls } from "./components/Controls"
import { Title } from "./components/Title"
import { Footer } from "./components/Footer"
import { useSelector } from "react-redux"

function App() {

  const button = useSelector(state=>state.button);
  const power = useSelector(state=>state.power);

  return (
    <>
    <Title />
    <main id="drum-machine" className={`p-4 d-flex flex-column align-items-center ${power&&'main-illumination-'+button}`}>
      <Logo />
      <section className="d-flex w-100 h-100 p-4 mb-3" >
        <Buttons />
        <Controls />
      </section>
    </main>
    <Footer />
    </>

  )
}

export default App
