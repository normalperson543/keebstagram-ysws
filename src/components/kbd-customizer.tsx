import { motion } from "motion/react";
import { Blank60KeyboardTypes, DeskpadTypes, KeycapTypes } from "../lib/constants";
import { useState } from "react";

function KbdCustomizer({ claimedCustomKeycaps }: {claimedCustomKeycaps: number}) {
  const [blankKeebType, setBlankKeebType] = useState(2);
  const [deskpadType, setDeskpadType] = useState(2);
  const [keycaps, setKeycaps] = useState([
    {
      id: 0,
      type: 1,
    },
    {
      id: 1,
      type: 2,
    },
    {
      id: 2,
      type: 3,
    },
    {
      id: 3,
      type: 4,
    },
    {
      id: 4,
      type: 5,
    },
    {
      id: 5,
      type: 6,
    },
    {
      id: 6,
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
    <div
      className="bg-cover rounded-lg shadow-md shadow-gray-500 p-16 relative bg-center aspect-1920/768 w-full box-border"
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
          className="aspect-1925/638 w-full max-w-180"
        />
        {keycaps.map((k) => (
          <motion.img
            src={KeycapTypes[k.type]}
            className={`absolute w-[6%]`}
            initial={{ opacity: 0, scale: 2.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * k.id }}
            onClick={(e) => handleChangeKeycap(e, k.id)}
            style={{ top: "20%", left: `${10.5 + k.id * 6.6}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default KbdCustomizer