import { useSelector } from 'react-redux';
import '../styles/Footer.scss'

const Footer = () => {

  const button = useSelector(state=>state.button);

  return (
    <div className={`mt-5 text-white fs-5`} >Challenge by <a className={`hover-full-opacity text-illumination-${button}`}  href='https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine' target="_blank" rel="noreferrer">freeCodeCamp</a></div>
  )
}

export { Footer };