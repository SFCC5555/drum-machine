import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeBank } from "../redux/bankSlice";
import { changeScreen } from "../redux/screenSlice";

const BankSwitch = () => {

  const dispatch = useDispatch();
  
  const button = useSelector(state=>state.button);
  const bank = useSelector(state=>state.bank);
  const power = useSelector(state=>state.power);

  function handleClick() {

      dispatch(changeBank(!bank));
      power&&dispatch(changeScreen(bank?'Heater Kit':'Cyborg Kit'));

  }

  return (
    <section className="d-flex align-items-center gap-3 bank-section" >
      <h3 className={`fs-5 ${(power&&!bank)&&'control-text-illumination-'+button}`} >Heater Kit</h3>
      <div className={`switch-container p-1 d-flex justify-content-${bank?'end':'start'} bg-black`} ><div onClick={handleClick}  className={`w-50 h-100 switch ${power&&'switch-illumination-'+button}`} ></div></div>
      <h3 className={`fs-5 ${(power&&bank)&&'control-text-illumination-'+button}`} >Cyborg Kit</h3>
    </section>  
  )
}

export {BankSwitch}