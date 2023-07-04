import { useSelector } from "react-redux";

const Title = () => {

  const power = useSelector(state=>state.power);

  return (
    <h1 className={`${power&&'title-illumination'}`} >DRUM MACHINE</h1>
  )
}

export {Title};