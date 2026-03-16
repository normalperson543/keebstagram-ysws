import "./App.css";
import orangePaper from "./assets/orange-paper.jpg";
import paper from "./assets/paper.jpg";
import r65 from "./assets/keebs/r65.png"
import f75 from "./assets/keebs/f75.png"
import hcKeycap from "./assets/keycaps/hc.png"
import { motion } from "motion/react";
function App() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="w-full p-12 flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${orangePaper})` }}
      >
        <div className="flex flex-col gap-6 items-center justify-center w-3/5">
          <p className="text-3xl">welcome to the</p>
          <div
            className="rounded p-8 text-5xl  shadow-md shadow-gray-500 w-full text-center bg-cover relative"
            style={{ backgroundImage: `url(${paper})` }}
          >
            keyboard emporium!
            <div className="p-4 -right-8 -bottom-8 rotate-5 border-dashed w-fit absolute hover:rotate-10 hover:scale-120 duration-200">
              <img src={r65} width={120} height={120} />
            </div>
            <div className="p-4 -left-8 -top-8 rotate-5 border-dashed w-fit absolute hover:-rotate-10 hover:scale-120 duration-200">
              <img src={f75} width={120} height={120} />
            </div>
          </div>
          <div className="text-4xl flex flex-col gap-8">
            <p>build your own virtual keyboard with your friends by coding!</p>
            <div className="flex flex-col gap-4">
              <p>
                then, get a <b>mechanical keyboard</b> irl,
              </p>
              <p>
                and <b>custom hack club keycaps!</b>
              </p>
            </div>
          </div>
          <input
            type="email"
            className="border border-orange-900 bg-orange-100 p-4 text-4xl cursor-pointer hover:scale-102 w-full duration-200"
            placeholder="enter your email (teens 13-18)"
          />
          <div className="flex gap-4 w-full">
            <div className="border border-orange-900 bg-orange-200 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 flex-1 duration-200">
              preview platform!
            </div>
            <div className="border border-orange-900 bg-orange-100 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 flex-1 duration-200">
              how it works
            </div>
          </div>
          <motion.img src={hcKeycap} className="absolute top-12" width={150} height={150} initial={{left: -24, opacity: 0, rotate: 0}} animate={{left: 24, opacity: 1, rotate: 12}} transition={{type: "spring"}}/>
          <motion.img src={hcKeycap} className="absolute top-60" width={150} height={150} initial={{left: -24, opacity: 0, rotate: 0}} animate={{left: 24, opacity: 1, rotate: -12}} transition={{type: "spring", delay: 0.1}}/>
          <motion.img src={hcKeycap} className="absolute top-120" width={150} height={150} initial={{left: -24, opacity: 0, rotate: 0}} animate={{left: 24, opacity: 1, rotate: 12}} transition={{type: "spring", delay: 0.2}}/>
          <motion.img src={hcKeycap} className="absolute top-12" width={150} height={150} initial={{right: -24, opacity: 0, rotate: 0}} animate={{right: 24, opacity: 1, rotate: -12}} transition={{type: "spring", delay: 0.25}}/>
          <motion.img src={hcKeycap} className="absolute top-60" width={150} height={150} initial={{right: -24, opacity: 0, rotate: 0}} animate={{right: 24, opacity: 1, rotate: 12}} transition={{type: "spring", delay: 0.3}}/>
          <motion.img src={hcKeycap} className="absolute top-120" width={150} height={150} initial={{right: -24, opacity: 0, rotate: 0}} animate={{right: 24, opacity: 1, rotate: -12}} transition={{type: "spring", delay: 0.32}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
