import orangePaper from "../../assets/orange-paper.jpg";
import paper from "../../assets/paper.jpg";
import deskpad from "../../assets/desk-pads/rawr.jpg";
import hcColors60PercentKeeb from "../../assets/blank-keebs/60/hackclub-colors.png";
import hcKeycap from "../../assets/keycaps/hc.png";
import htKeycap from "../../assets/keycaps/ht.png";
import hcbKeycap from "../../assets/keycaps/hcb.png";
import { motion } from "motion/react";
function ProfileUI() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="w-full p-3 md:p-8 flex bg-cover gap-6 items-center"
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
        <p className="text-3xl">normalperson543</p>
      </div>
      <div className="p-12 flex flex-col items-center gap-4">
        <img
          src="https://ca.slack-edge.com/E09V59WQY1E-U098F6EJ34J-e8250c861b27-512"
          className="w-18 h-18 rounded-full"
        />
        <p className="text-3xl">normalperson543</p>
        <div className="flex gap-6 items-center">
          <div className="border border-orange-900 bg-orange-100 p-2 text-xl text-start">
            3/61 keys
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
            <motion.img
              src={hcKeycap}
              className="absolute top-[12%] left-[8%] w-[11%]"
              initial={{ opacity: 0, scale: 2.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            />
            <motion.img
              src={htKeycap}
              className="absolute top-[12%] left-[14.5%] w-[11%]"
              initial={{ opacity: 0, scale: 2.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.img
              src={hcbKeycap}
              className="absolute top-[12%] left-[21.25%] w-[11%]"
              initial={{ opacity: 0, scale: 2.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            />
          </div>
        </div>
        <div
          className="border border-orange-900 bg-orange-100 p-6 text-3xl text-center w-2/3 font-bold"
          style={{
            background:
              "linear-gradient(90deg, #FFC068 0%, #FFC068 4%, #FFE9C9 4%)",
          }}
        >
          5% complete
        </div>
        <p>0:47 minutes logged, 0 hours pending, 0 hours approved</p>
        <div
          className="rounded p-4 text-3xl shadow-md shadow-gray-500 w-2/3 text-center bg-cover"
          style={{ backgroundImage: `url(${paper})` }}
        >
          To customize your keyboard, click on the part you want to customize!
          It&apos;ll cycle to the next available style for that part.
        </div>
      </div>
    </div>
  );
}
export default ProfileUI;
