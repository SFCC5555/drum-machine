import '../styles/Volume.scss';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeVolume } from "../redux/volumeSlice";
import { changeScreen } from "../redux/screenSlice";
import { useState } from "react";


const Volume = () => {

  const dispatch = useDispatch();

  const [screenTimeout, setScreenTimeout] = useState(null);

  const button = useSelector(state=>state.button);
  const volume = useSelector(state=>state.volume);
  const power = useSelector(state=>state.power);

  function handleVolumeChange(e) {

    if (screenTimeout) {
      clearTimeout(screenTimeout);
    }

    dispatch(changeVolume(e.target.value));
    power&&dispatch(changeScreen('Volume: '+e.target.value));

    const newScreenTimeout = setTimeout(() => {
      dispatch(changeScreen(""));
    }, 1200);

    setScreenTimeout(newScreenTimeout);


  }

  return (
    <section className="d-flex align-items-center gap-3 power-section">
      <h3 className={`fs-5 ${power && "control-text-illumination-" + button}`}>
        Volume
      </h3>
      <input className={`volume-bar ${
            power && "volume-bar-illumination-" + button
          }`}
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
      />
      <i
      className={`bi bi-volume-${!power?'off vol-off':volume==0?'mute':volume<50?'down vol-down':'up'} fs-2 ${
        power && "control-text-illumination-" + button
      }`}
    />
    </section>

  );
};

export {Volume};