import ListToggleNavBar from "./ListToggleNavBar";

export default function ListNavBar({ toggleMenu }) {
  return (
    <div
      className={`${
        toggleMenu ? "hidden" : "block"
      } md:flex md:justify-center md:items-center`}
    >
      <div className="bg-gray-100 md:bg-amber-50 ">
        <ListToggleNavBar/>
      </div>
    </div>
  );
}
