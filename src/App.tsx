import "./App.css";
import orangePaper from "./assets/orange-paper.jpg";
import paper from "./assets/paper.jpg";

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
            <div className="p-4 rounded-md">
              
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
            className="border border-orange-900 bg-orange-100 p-4 text-4xl cursor-pointer hover:scale-102 w-full"
            placeholder="enter your email (teens 13-18)"
          />
          <div className="flex gap-4 w-full">
            <div className="border border-orange-900 bg-orange-200 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 flex-1">
              preview platform!
            </div>
            <div className="border border-orange-900 bg-orange-100 p-4 text-4xl cursor-pointer hover:scale-102 hover:rotate-1 flex-1">
              how it works
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
