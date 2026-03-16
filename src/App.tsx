import "./App.css";
import orangePaper from "./assets/orange-paper.jpg";
import paper from "./assets/paper.jpg";
import r65 from "./assets/keebs/r65.png";
import f75 from "./assets/keebs/f75.png";
import hcKeycap from "./assets/keycaps/hc.png";
import clubsKeycap from "./assets/keycaps/clubs.png";
import flagKeycap from "./assets/keycaps/flag.png";
import hcbKeycap from "./assets/keycaps/hcb.png";
import htKeycap from "./assets/keycaps/ht.png";
import blank60PercentKeeb from "./assets/blank-keebs/60/blank.png";
import hcColors60PercentKeeb from "./assets/blank-keebs/60/hackclub-colors.png";
import deskpad from "./assets/desk-pads/rawr.jpg";
import logiPad from "./assets/accessories/logi-pad.png";
import wristrest from "./assets/accessories/wrist-rest.png";
import { motion } from "motion/react";
function App() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="w-full p-12 flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${orangePaper})` }}
      >
        <div className="flex flex-col gap-6 items-center justify-center w-3/5">
          <p className="text-3xl">welcome to</p>
          <div
            className="rounded p-8 text-5xl  shadow-md shadow-gray-500 w-full text-center bg-cover relative"
            style={{ backgroundImage: `url(${paper})` }}
          >
            <b>keeb</b>
            <span className="font-thin">stagram!</span>
            <div className="p-4 -right-8 -bottom-8 rotate-5 border-dashed w-fit absolute hover:rotate-10 hover:scale-120 duration-200">
              <img src={r65} width={120} height={120} />
            </div>
            <div className="p-4 -left-8 -top-8 rotate-5 border-dashed w-fit absolute hover:-rotate-10 hover:scale-120 duration-200">
              <img src={f75} width={120} height={120} />
            </div>
          </div>
          <div className="text-4xl flex flex-col gap-8">
            <p>
              <b>build your own virtual keyboard</b> by making any keeb-related
              projects!
            </p>
            <div className="flex flex-col gap-4">
              <p>
                and, get a real <b>mechanical keyboard</b> irl,
              </p>
              <p>
                and <b>custom hack club keycaps!</b>
              </p>
            </div>
          </div>
          <input
            type="email"
            className="border border-orange-900 bg-orange-100 p-4 text-4xl hover:scale-102 w-full duration-200"
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
          <motion.img
            src={hcKeycap}
            className="absolute top-12"
            width={150}
            height={150}
            initial={{ left: -24, opacity: 0, rotate: 0 }}
            whileInView={{ left: 24, opacity: 1, rotate: 12 }}
            transition={{ type: "spring" }}
          />
          <motion.img
            src={clubsKeycap}
            className="absolute top-60"
            width={150}
            height={150}
            initial={{ left: -24, opacity: 0, rotate: 0 }}
            whileInView={{ left: 60, opacity: 1, rotate: -12 }}
            transition={{ type: "spring", delay: 0.1 }}
          />
          <motion.img
            src={hcbKeycap}
            className="absolute top-120"
            width={150}
            height={150}
            initial={{ left: -24, opacity: 0, rotate: 0 }}
            whileInView={{ left: 24, opacity: 1, rotate: 12 }}
            transition={{ type: "spring", delay: 0.2 }}
          />
          <motion.img
            src={hcKeycap}
            className="absolute top-12"
            width={150}
            height={150}
            initial={{ right: -24, opacity: 0, rotate: 0 }}
            whileInView={{ right: 24, opacity: 1, rotate: -12 }}
            transition={{ type: "spring", delay: 0.25 }}
          />
          <motion.img
            src={flagKeycap}
            className="absolute top-60"
            width={150}
            height={150}
            initial={{ right: -24, opacity: 0, rotate: 0 }}
            whileInView={{ right: 60, opacity: 1, rotate: 12 }}
            transition={{ type: "spring", delay: 0.3 }}
          />
          <motion.img
            src={htKeycap}
            className="absolute top-120"
            width={150}
            height={150}
            initial={{ right: -24, opacity: 0, rotate: 0 }}
            whileInView={{ right: 24, opacity: 1, rotate: -12 }}
            transition={{ type: "spring", delay: 0.32 }}
          />
        </div>
      </div>
      <div className="flex gap-12 p-24">
        <div className="w-1/2 flex flex-col gap-6 text-3xl">
          <p>
            <b>mechanical keyboards are cool!</b> they can sound really creamy,
            they look good on your desk, and you can customize them!
          </p>
          <p>
            now you can get your own, <b>for free.</b>
          </p>
          <p>
            and, you'll meet a lot of cool hackclubbers when you're at it too.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <p>
            fun fact: i got my mechanical keyboard (rainy75) for free from hack
            club!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-24 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-6">
          <b className="text-4xl">Well, how do I get one?</b>
          <p className="text-4xl">You start with a 60% virtual keyboard.</p>
          <p className="text-md">
            keeb model credits:{" "}
            <a
              href="https://www.printables.com/model/1129171-60-percent-keyboard-plate-ansi/files"
              className="underline"
            >
              60 percent keyboard plate (ANSI)
            </a>{" "}
            from{" "}
            <a href="https://www.printables.com/@B20bob" className="underline">
              B20bob
            </a>{" "}
            on Printables,{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY-NC-SA 4.0
            </a>
          </p>
        </div>
        <motion.div
          className="bg-gray-700 relative"
          initial={{ top: -24, opacity: 0, rotate: -12 }}
          whileInView={{ top: 0, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.1 }}
        >
          <img src={blank60PercentKeeb} width={720} />
        </motion.div>
      </div>
      <div className="flex flex-col gap-8 px-24 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Customize your virtual keyboard. Add fun colors, desk pads, wrist
            rests...
          </b>
          <p className="text-3xl">
            And share it with the community. You&apos;ll be able to see other
            people&apos;s keyboards (and their progress!)
          </p>
          <p className="text-md">
            dino image from{" "}
            <a href="https://rawr.hackclub.com" className="underline">
              rawr.hackclub.com
            </a>
            !
          </p>
        </div>
        <div
          className="bg-cover rounded-lg shadow-md shadow-gray-500 p-16 relative"
          style={{ backgroundImage: `url(${deskpad})` }}
        >
          <div className="bg-gray-700">
            <img src={hcColors60PercentKeeb} width={720} />
          </div>
          <motion.div
            className="rounded p-4 text-2xl shadow-md shadow-gray-500 w-fit text-center bg-cover absolute -bottom-12 -right-8 rotate-2"
            style={{ backgroundImage: `url(${paper})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.25 }}
          >
            @normalperson543's keyboard
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-24 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Every 15 minutes you make something, one key gets added to your
            keyboard.
          </b>
        </div>
        <div
          className="bg-cover rounded-lg shadow-md shadow-gray-500 p-16 relative"
          style={{ backgroundImage: `url(${deskpad})` }}
        >
          <div className="bg-gray-700 relative">
            <img src={hcColors60PercentKeeb} width={720} />
            <motion.img
              src={hcKeycap}
              width={75}
              height={75}
              className="absolute top-8 left-15"
              initial={{ opacity: 0, scale: 2.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-24 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Pick one custom keycap to add to your virtual keeb, and get it IRL
            for free!
          </b>
          <p className="text-3xl">
            You must ship a project in order to get a custom key. These designs
            are not final!
          </p>
        </div>
        <div className="flex">
          <motion.img
            src={hcKeycap}
            className="relative"
            width={240}
            height={240}
            initial={{ left: -120, opacity: 0, rotate: 0 }}
            whileInView={{ left: 24, opacity: 1, rotate: 12 }}
            transition={{ type: "spring" }}
          />
          <motion.img
            src={hcbKeycap}
            className="relative"
            width={240}
            height={240}
            initial={{ left: -120, opacity: 0, rotate: 0 }}
            whileInView={{ left: 24, opacity: 1, rotate: -12 }}
            transition={{ type: "spring", delay: 0.1 }}
          />
          <motion.img
            src={clubsKeycap}
            className="relative"
            width={240}
            height={240}
            initial={{ left: -120, opacity: 0, rotate: 0 }}
            whileInView={{ left: 24, opacity: 1, rotate: 12 }}
            transition={{ type: "spring", delay: 0.2 }}
          />
          <motion.img
            src={flagKeycap}
            className="relative"
            width={240}
            height={240}
            initial={{ left: -120, opacity: 0, rotate: 0 }}
            whileInView={{ left: 24, opacity: 1, rotate: -12 }}
            transition={{ type: "spring", delay: 0.3 }}
          />
          <motion.img
            src={htKeycap}
            className="relative"
            width={240}
            height={240}
            initial={{ left: -120, opacity: 0, rotate: 0 }}
            whileInView={{ left: 24, opacity: 1, rotate: 12 }}
            transition={{ type: "spring", delay: 0.4 }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 px-24 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Collect all 61 keys, and get this 60% keyboard IRL, AND a wrist
            rest, AND 3 total custom keys.
          </b>
          <p className="text-3xl">
            ROYAL KLUDGE R65 or similar 60-65% keyboard. That means 16 hours of
            coding!
          </p>
        </div>
        <div className="relative">
          <motion.div
            className="absolute -top-8 -left-8 p-4 rounded-md bg-orange-100 flex flex-col items-center justify-center -rotate-20"
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.25 }}
          >
            <div className="rounded-full border-4 border-orange-900 bg-orange-50 p-4 text-5xl font-extrabold">
              61
            </div>
            <p className="text-3xl">keys</p>
          </motion.div>
          <img src={r65} width={480} />
          <img src={wristrest} width={480} className="absolute -bottom-24" />
        </div>
      </div>
      <div className="flex flex-col gap-12 px-24 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Or, get 84 keys, and get this 75% keyboard, AND a desk pad, and 5
            total custom keys.
          </b>
          <p className="text-3xl">
            EPOMAKER X Aula F75 MAX or similar 75%-TKL keyboard, and a Logitech
            desk pad. That means 21 hours of coding!
          </p>
        </div>
        <div className="relative">
          <motion.div
            className="absolute -top-8 -left-8 p-4 rounded-md bg-orange-100 flex flex-col items-center justify-center -rotate-20"
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.25 }}
          >
            <div className="rounded-full border-4 border-orange-900 bg-orange-50 p-4 text-5xl font-extrabold">
              84
            </div>
            <p className="text-3xl">keys</p>
          </motion.div>
          <img
            src={f75}
            width={480}
            className="absolute top-1/2 left-1/2 -translate-1/2 z-2"
          />
          <img src={logiPad} width={720} />
        </div>
      </div>
      <div className="flex flex-col gap-12 px-24 py-18 text-center items-center justify-center">
        <div className="flex flex-col gap-4">
          <b className="text-4xl">
            Or, get 84 keys, and get this 75% keyboard, AND a desk pad, and 5
            total custom keys.
          </b>
          <p className="text-3xl">
            EPOMAKER X Aula F75 MAX or similar 75%-TKL keyboard, and a Logitech
            desk pad. That means 21 hours of coding!
          </p>
        </div>
        <div className="relative">
          <motion.div
            className="absolute -top-8 -left-8 p-4 rounded-md bg-orange-100 flex flex-col items-center justify-center -rotate-20"
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.25 }}
          >
            <div className="rounded-full border-4 border-orange-900 bg-orange-50 p-4 text-5xl font-extrabold">
              84
            </div>
            <p className="text-3xl">keys</p>
          </motion.div>
          <img
            src={f75}
            width={480}
            className="absolute top-1/2 left-1/2 -translate-1/2 z-2"
          />
          <img src={logiPad} width={720} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
