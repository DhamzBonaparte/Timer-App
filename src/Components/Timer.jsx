import { useContext, useState } from "react";
import { TimeContext } from "./Context";
import './Timer.scss';
import { motion } from "framer-motion";

export default function Timer() {
  const { num, setNum, active, setActive,now,setDisabled,disabled } = useContext(TimeContext);
//   const [pause,setPause]=useState(false);

  function handleReset() {
    setActive(!active);
    setNum(now*60);
}

//   function handlePause() {
//     setPause(!pause);
//   }

  return (
    <>
      <h1 className="h1">{num < 1 ? "Time is up!!!" : num + " seconds"}</h1>
      <div className="buttons">
          <motion.button onClick={handleReset} whileTap={{ scale: 0.5 }}>Reset</motion.button>
          {/* <button onClick={handlePause}>{pause==false?"Pause":"Go"}</button> */}
        </div>
    </>
  );
}
