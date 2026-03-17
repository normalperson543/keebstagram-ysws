import orangePaper from "./assets/orange-paper.jpg";
import paper from "./assets/paper.jpg";
function ProfileUI() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className="w-full p-6 md:p-12 flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${orangePaper})` }}
      ></div>
    </div>
  );
}
export default ProfileUI;
