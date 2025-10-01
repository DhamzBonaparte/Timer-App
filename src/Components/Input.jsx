import { useState } from "react";
import { TimeContext } from "./Context";
import Timer from "./Timer";
import "./Input.scss";
import { motion } from "framer-motion";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

export default function Input() {
  const [now, setNow] = useState(1);
  const [num, setNum] = useState(60);
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function handleSend() {
    setDisabled(true);
    setNum(now * 60);
    setActive(true);
    if (now < 0 || !Number(now)) {
      alert(`Not a valid Number!!!`);
    } else {
      setInterval(() => {
        setNum((num) => num - 1);
      }, 1000);
    }
  }

  return (
    <>
      <h1 className="title">Timer App (No Pause 🤧)</h1>
      <TimeContext.Provider value={{ num, setNum, active, setActive, now,setDisabled,disabled }}>
        <div className="card">
          <div className="top">
            <motion.input
              whileFocus={{scale:1.17}}
              className="inp"
              type="text"
              placeholder="Enter the time in minutes..."
              onChange={(e) => setNow(e.target.value)}
              disabled={disabled ? true : false}
            />
            <motion.button
              disabled={disabled ? true : false}
              whileTap={{ scale: 0.5 }}
              onClick={handleSend}
            >
              <PlayCircleFilledWhiteIcon />
            </motion.button>
          </div>
          <h2>
            Timer of : {now} {now == 1 ? "minute" : "minutes"}
          </h2>
          <Timer />
        </div>
      </TimeContext.Provider>
    </>
  );
}
