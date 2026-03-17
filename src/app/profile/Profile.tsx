import orangePaper from "../../assets/orange-paper.jpg";
import paper from "../../assets/paper.jpg";
import deskpad from "../../assets/desk-pads/rawr.jpg";
import hcColors60PercentKeeb from "../../assets/blank-keebs/60/hackclub-colors.png";
import { motion } from "motion/react";
import { useState } from "react";
import { KeycapTypes } from "../../lib/constants";

function ProfileUI() {
  const claimedCustomKeycaps = 1;
  const [keycaps, setKeycaps] = useState([
    {
      id: 0,
      type: 1,
    },
    {
      id: 1,
      type: 0,
    },
    {
      id: 2,
      type: 0,
    },
    {
      id: 3,
      type: 0,
    },
  ]);
  function handleChangeKeycap(id: number) {
    if (keycaps[id].type === 0) {
    }
    setKeycaps(
      keycaps.map((k) => {
        if (k.id === id) {
          return {
            id: id,
            type:
              keycaps[id].type === KeycapTypes.length - 1
                ? 0
                : keycaps[id].type + 1,
          };
        } else return k;
      }),
    );
  }
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="w-full p-3 md:p-8 flex bg-cover gap-4 items-center"
        style={{ backgroundImage: `url(${orangePaper})` }}
      >
        <div className="flex gap-6 flex-1 items-center">
          <div
            className="rounded p-4 text-3xl shadow-md shadow-gray-500 w-fit text-center bg-cover"
            style={{ backgroundImage: `url(${paper})` }}
          >
            <b>keeb</b>
            <span className="font-thin">stagram!</span>
          </div>
          <button className="border border-orange-900 bg-orange-200 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start">
            my profile
          </button>
          <button className="border border-orange-900 bg-orange-100 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start">
            explore
          </button>
          <button className="border border-orange-900 bg-orange-100 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start">
            shop
          </button>
        </div>
        <img
          src="https://ca.slack-edge.com/E09V59WQY1E-U098F6EJ34J-e8250c861b27-512"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col items-end">
          <p className="text-3xl font-bold">normalperson543</p>
          <p className="text-xl">4/61 keys - 6% complete</p>
        </div>
      </div>
      <div className="p-12 flex flex-col items-center gap-4">
        <img
          src="https://ca.slack-edge.com/E09V59WQY1E-U098F6EJ34J-e8250c861b27-512"
          className="w-18 h-18 rounded-full"
        />
        <p className="text-3xl">normalperson543</p>
        <div className="flex gap-6 items-center">
          <div className="border border-orange-900 bg-orange-100 p-2 text-xl text-start">
            4/61 keys
          </div>
          <div className="border border-orange-900 bg-orange-100 p-2 text-xl text-start">
            1 custom key
          </div>
          <div className="border border-orange-900 bg-orange-100 p-2 text-xl text-start">
            1 shipped project
          </div>
          <div className="border border-orange-900 bg-orange-100 p-2 text-xl text-start">
            60% keeb
          </div>
        </div>
        <div
          className="bg-cover rounded-lg shadow-md shadow-gray-500 p-16 relative"
          style={{ backgroundImage: `url(${deskpad})` }}
        >
          <div className="bg-gray-700 relative w-full aspect-1925/638">
            <img src={hcColors60PercentKeeb} width={720} />
            {keycaps.map((k) => (
              <motion.img
                src={KeycapTypes[k.type]}
                className={`absolute w-[11%]`}
                initial={{ opacity: 0, scale: 2.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => handleChangeKeycap(k.id)}
                style={{ top: "11%", left: `${8 + k.id * 6.6}%` }}
              />
            ))}
          </div>
        </div>
        <div
          className="border border-orange-900 bg-orange-100 p-6 text-3xl text-center w-2/3 font-bold"
          style={{
            background:
              "linear-gradient(90deg, #FFC068 0%, #FFC068 6%, #FFE9C9 6%)",
          }}
        >
          6% complete
        </div>
        <p>1:01 hours logged, 0 hours pending, 0 hours approved</p>
        <div
          className="rounded p-4 text-3xl shadow-md shadow-gray-500 w-2/3 text-center bg-cover"
          style={{ backgroundImage: `url(${paper})` }}
        >
          To customize your keyboard, click on the part you want to customize!
          It&apos;ll cycle to the next available style for that part.
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p>Projects</p>
        <button className="border border-orange-900 bg-orange-200 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start">
          Create
        </button>
      </div>
    </div>
  );
}
export default ProfileUI;
