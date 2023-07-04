import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePower } from "../redux/powerSlice";
import { changeButton } from "../redux/buttonSlice";
import { changeScreen } from "../redux/screenSlice";
import powerOn from "../assets/audio/jblStartupSound.mp3";
import powerOff from "../assets/audio/jblShutdownSound.mp3";

const PowerSwitch = () => {
  const dispatch = useDispatch();
  const button = useSelector((state) => state.button);
  const power = useSelector((state) => state.power);
  const [screenTimeout, setScreenTimeout] = useState(null);

  function handleClick() {
    dispatch(changePower(!power));
    dispatch(changeButton("light"));



    if (screenTimeout) {
      clearTimeout(screenTimeout);
    }

    dispatch(changeScreen(power ? "" : "Hello World!"));

    const newScreenTimeout = setTimeout(() => {
      dispatch(changeScreen(""));
    }, 1200);

    setScreenTimeout(newScreenTimeout);

    const audioPower = document.getElementById(power?'audio-off':'audio-on')
    audioPower.currentTime = 0; // Reiniciar la reproducción desde el principio
    audioPower.play();
  }


  return (
    <section className="d-flex align-items-center gap-3 power-section">
      <h3 className={`fs-4 ${power && "control-text-illumination-" + button}`}>
        Power
      </h3>
      <div
        onClick={handleClick}
        className={`switch-container p-1 d-flex justify-content-${
          power ? "end" : "start"
        } bg-black`}
      >
        <div
          className={`w-50 h-100 switch ${
            power && "switch-illumination-" + button
          }`}
        ></div>
      </div>
      <i
        className={`bi bi-power fs-2 ${
          power && "control-text-illumination-" + button
        }`}
      />
      <audio id='audio-on' src={powerOn} />
      <audio id='audio-off' src={powerOff} />
    </section>
  );
};

export { PowerSwitch };