import { useSelector } from "react-redux"
import '../styles/Screen.scss'

const Screen = () => {

	const power = useSelector(state=>state.power);
  const screen = useSelector(state=>state.screen);

    return (
      <div id="display" className={`screen ${power&&'screen-illumination'} fs-4 d-flex align-items-center justify-content-center`}>{screen}</div>
    )
  }
  
  export {Screen}