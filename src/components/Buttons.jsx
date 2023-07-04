import '../styles/Buttons.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeButton } from '../redux/buttonSlice';
import { changeScreen } from '../redux/screenSlice';
import { data } from '../data';
import { useEffect } from 'react';

const Buttons = () => {
  const dispatch = useDispatch();

  const power = useSelector(state => state.power);
  const bank = useSelector(state => state.bank);
  const volume = useSelector(state => state.volume);

  function handleClick(e) {
    
    dispatch(changeButton(e.target.id));
    dispatch(changeScreen(e.target.name));

    const audio = document.querySelector(`.clip#${e.target.id}`);
    audio.currentTime = 0; // Reiniciar la reproducción desde el principio
    audio.play();
    audio.volume = volume/100;
  }

  useEffect(()=>{

    if (power) {

      document.addEventListener('keydown',handleKeyDown);

      return ()=>{
        document.removeEventListener('keydown',handleKeyDown)
      };

    } else {
      document.addEventListener('keydown',handleKeyDownOff);

      return ()=>{
        document.removeEventListener('keydown',handleKeyDownOff)
      };
    }


  },[power,bank,volume])

  function handleKeyDown(e) {
    const pressButton = document.getElementById(e.key.toUpperCase());


    if (data.find(i=>i.color===e.key.toUpperCase())) {

        dispatch(changeButton(e.key.toUpperCase()));

        bank?dispatch(changeScreen(data.find(i=>i.color===e.key.toUpperCase()).name2)):
        dispatch(changeScreen(data.find(i=>i.color===e.key.toUpperCase()).name1))

        const audio = document.querySelector(`.clip#`+ e.key.toUpperCase());
        audio.currentTime = 0; // Reiniciar la reproducción desde el principio
        audio.play();
        audio.volume = volume/100;
  
  
        pressButton.classList.add('btn-press-'+e.key.toUpperCase());
  
        setTimeout(()=>{
          pressButton.classList.remove('btn-press-'+e.key.toUpperCase());
        },200)
        
    }

  }

  function handleKeyDownOff(e) {

    if (data.find(i=>i.color===e.key.toUpperCase())) {

      const pressButton = document.getElementById(e.key.toUpperCase());
      pressButton.classList.add('btn-press-off');
  
      setTimeout(()=>{
        pressButton.classList.remove('btn-press-off');
      },200)
    }

  }

  return (
    <section className="buttons-container">
      {data.map(b => (
        <div key={b.color}>
          <button
            id={b.color}
            name={bank?b.name2:b.name1}
            onClick={power?handleClick:undefined}
            className={`drum-pad button ${power && 'btn-' + b.color}`}
          >
            {b.color}
            <audio className='clip' id={b.color} src={bank?b.audio2:b.audio1} />
          </button>

        </div>
      ))}
    </section>
  );
}

export { Buttons };