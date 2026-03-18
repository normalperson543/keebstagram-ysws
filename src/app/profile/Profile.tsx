import orangePaper from "../../assets/orange-paper.jpg";
import paper from "../../assets/paper.jpg";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Blank60KeyboardTypes,
  DeskpadTypes,
  KeycapTypes,
} from "../../lib/constants";
import { Link } from "react-router";
import { HeartIcon } from "lucide-react";
import hcFlag from "../../assets/flag-standalone-wtransparent.svg";
function ProfileUI() {
  const claimedCustomKeycaps = 1;
  const [blankKeebType, setBlankKeebType] = useState(1);
  const [deskpadType, setDeskpadType] = useState(1);
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
  function handleChangeDeskpad(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    e.stopPropagation();
    if (deskpadType === DeskpadTypes.length - 1) {
      setDeskpadType(0);
    } else {
      setDeskpadType(deskpadType + 1);
    }
  }
  function handleChangeKeyboard(
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) {
    e.stopPropagation();
    if (blankKeebType === Blank60KeyboardTypes.length - 1) {
      setBlankKeebType(0);
    } else {
      setBlankKeebType(blankKeebType + 1);
    }
  }
  function handleChangeKeycap(
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    id: number,
  ) {
    e.stopPropagation();
    if (keycaps[id].type === 0) {
      const customKeycaps = keycaps.filter((k) => k.type > 0);
      if (customKeycaps.length >= claimedCustomKeycaps) {
        alert(
          `You only have ${claimedCustomKeycaps} custom keycap${claimedCustomKeycaps !== 1 ? "s" : ""}. You need to make a custom keycap on your keyboard blank first before making this key a custom keycap.`,
        );
        return;
      }
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
    <div className="w-full flex flex-col items-center">
      <div className="w-full p-2 bg-yellow-400 text-center font-bold">
        <p>
          This is a <b>preview</b> of the keebstagram platform and a POC on how
          your virtual keyboard and profile will look like!
        </p>
      </div>
      <div
        className="w-full p-3 md:p-8 flex bg-cover gap-4 items-center"
        style={{ backgroundImage: `url(${orangePaper})` }}
      >
        <div className="flex gap-6 flex-1 items-center">
          <Link to="/">
            <div
              className="rounded p-4 text-3xl shadow-md shadow-gray-500 w-fit text-center bg-cover relative flex items-center"
              style={{ backgroundImage: `url(${paper})` }}
            >
              <img
                src="/assets/keycaps/hc.png"
                className="-left-4 relative w-12 h-12 -rotate-12"
              />
              <b>keeb</b>
              <span className="font-thin">stagram!</span>
            </div>
          </Link>
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
          className="bg-cover rounded-lg shadow-md shadow-gray-500 p-16 relative bg-center aspect-1920/768 w-2/3 box-border"
          style={{
            backgroundImage: `url(${DeskpadTypes[deskpadType]})`,
            border: deskpadType === 0 ? "8px dashed #aaa" : "",
          }}
          onClick={(e) => handleChangeDeskpad(e)}
        >
          <div className="bg-gray-700 relative w-full aspect-1925/638">
            <img
              src={Blank60KeyboardTypes[blankKeebType]}
              onClick={(e) => handleChangeKeyboard(e)}
              className="aspect-1925/638"
            />
            {keycaps.map((k) => (
              <motion.img
                src={KeycapTypes[k.type]}
                className={`absolute w-[6%]`}
                initial={{ opacity: 0, scale: 2.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * k.id }}
                onClick={(e) => handleChangeKeycap(e, k.id)}
                style={{ top: "20%", left: `${10.5 + k.id * 6.6}%` }}
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
      <div className="flex items-center justify-between w-2/3 px-12 py-4">
        <h2 className="text-3xl font-bold">Projects</h2>
        <button className="border border-orange-900 bg-orange-200 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start">
          Create
        </button>
      </div>
      <div
        className="flex flex-col gap-4 w-2/3 p-12 bg-cover rounded shadow-md shadow-gray-500"
        style={{ backgroundImage: `url(${paper}` }}
      >
        <div className="flex gap-4 items-center">
          <div className="flex gap-6 items-center flex-1">
            <img
              src="https://ca.slack-edge.com/E09V59WQY1E-U098F6EJ34J-e8250c861b27-512"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">normalperson543</p>
              <p>2 days ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <div className="flex items-center gap-3">
              <img src="/assets/keycaps/hc.png" width={36} />
              <p className="text-3xl">4</p>
            </div>
            <p>1:01 hours</p>
          </div>
        </div>
        <img
          src="/assets/examples/shipped-project.png"
          className="max-h-72 self-center"
        />
        <p className="text-2xl font-bold">Keebstagram YSWS</p>
        <p>The website you are looking at right now!</p>
        <button className="border border-orange-900 bg-orange-200 p-4 text-3xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start flex gap-4 w-fit">
          <HeartIcon />
          67
        </button>
      </div>
      <div className="p-16 bg-black  text-white flex flex-col items-center gap-2 w-full mt-8">
        <div className="flex flex-row gap-4 items-start w-full justify-center">
          <img src={hcFlag} width={64} />
          <p className="text-2xl font-bold">Hack Club</p> <p>|</p>
          <a href="https://hackclub.com" className="underline">
            About
          </a>
          <p>|</p>
          <p>
            Made with love by @normalperson543.{" "}
            <a
              href="https://github.com/normalperson543/keebstagram-ysws"
              className="underline"
              target="_blank"
            >
              Open source.
            </a>
          </p>
        </div>
        <p className="text-md text-gray-400">
          Keyboard model credits:{" "}
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
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            className="underline"
          >
            CC BY-NC-SA 4.0
          </a>
        </p>
        <p className="text-md text-gray-400">
          Keycap model credits:{" "}
          <a
            href="https://www.printables.com/model/118708-simple-cherry-mx-keycap"
            className="underline"
          >
            Simple Cherry MX Keycap
          </a>{" "}
          from{" "}
          <a
            href="https://www.printables.com/@3dNerdcave"
            className="underline"
          >
            3dNerdcave
          </a>{" "}
          on Printables,{" "}
          <a
            href="http://creativecommons.org/licenses/by/4.0/"
            className="underline"
          >
            CC BY 4.0
          </a>
        </p>
        <p className="text-md text-gray-400">
          Deskpad is from{" "}
          <a href="https://rawr.hackclub.com" className="underline">
            rawr.hackclub.com!
          </a>
        </p>
      </div>
    </div>
  );
}
export default ProfileUI;
