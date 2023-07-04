import '../styles/Controls.scss'
import { PowerSwitch } from "./PowerSwitch"
import { BankSwitch } from "./BankSwitch"
import { Screen } from "./Screen"
import { Volume } from "./Volume"

const Controls = () => {
  return (
    <section className="w-100 d-flex flex-column align-items-center gap-4" >
      <PowerSwitch />
      <Screen />
      <Volume />
      <BankSwitch />
    </section>
  )
}

export {Controls}