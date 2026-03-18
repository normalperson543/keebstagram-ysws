import { Link } from "react-router";
import orangePaper from "../assets/orange-paper.jpg";
import paper from "../assets/paper.jpg";

function AppHeader() {
  return (
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
        <div className="flex gap-2 items-center">
          <img src="/assets/keycaps/hc.png" width={32} />
          <p className="text-xl">4/61 - 6% complete</p>
        </div>
        
      </div>
    </div>
  )
}
export default AppHeader;