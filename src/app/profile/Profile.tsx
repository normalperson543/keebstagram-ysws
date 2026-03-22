import { motion } from "motion/react";
import { useState } from "react";
import {
  Blank60KeyboardTypes,
  DeskpadTypes,
  KeycapTypes,
} from "../../lib/constants";
import { CheckIcon, HeartIcon, PlayIcon } from "lucide-react";
import hcFlag from "../../assets/flag-standalone-wtransparent.svg";
import ghLogo from "../../assets/logos/gh.svg";
import AppHeader from "../../components/app-header";
import MVPHeader from "../../components/mvp-header";
import paper from "../../assets/paper.jpg";

function ProfileUI() {
  const claimedCustomKeycaps = 1;
  const [blankKeebType, setBlankKeebType] = useState(2);
  const [deskpadType, setDeskpadType] = useState(2);
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
      <MVPHeader />

      <AppHeader />

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
          <div className="flex gap-6 items-center">
            <div className="uppercase bg-green-100 border border-green-800 p-2 rounded-full flex items-center gap-2">
              <CheckIcon />
              Approved
            </div>
            <div className="flex flex-col gap-2 items-end">
              <div className="flex items-center gap-3">
                <img src="/assets/keycaps/hc.png" width={36} />
                <p className="text-3xl">4</p>
              </div>
              <p>1:01 hours</p>
            </div>
          </div>
        </div>
        <img
          src="/assets/examples/shipped-project.png"
          className="max-h-72 self-center"
        />
        <p className="text-2xl font-bold">Keebstagram YSWS</p>
        <p>The website you are looking at right now!</p>
        <div className="flex gap-6 items-center">
          <button className="border border-orange-900 bg-orange-200 p-4 text-3xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start flex gap-4 w-fit items-center">
            <HeartIcon />
            67
          </button>
          <button className="border border-orange-900 bg-orange-100 p-4 text-3xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start flex gap-4 w-fit items-center">
            <img src={ghLogo} width={32} />
            Repository
          </button>
          <button className="border border-orange-900 bg-orange-100 p-4 text-3xl cursor-pointer hover:scale-102 hover:rotate-1 duration-200 relative text-start flex gap-4 w-fit items-center">
            <PlayIcon />
            Live Demo
          </button>
        </div>
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
