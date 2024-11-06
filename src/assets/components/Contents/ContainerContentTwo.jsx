import ContentTwo from "./ContentTwo";
import vektorOne from "../../img/vektorOne.png";
import vektorTwo from "../../img/vektorTwo.png";
import vektorThree from "../../img/vektorThree.png";
import vektorFour from "../../img/vektorFour.png";

const icons = [
  {
    name: "ITS",
    url: vektorOne,
  },
  {
    name: "SCADA",
    url: vektorTwo,
  },
  {
    name: "Tolling",
    url: vektorThree,
  },
  {
    name: "Highway",
    url: vektorFour,
  },
];

export default function ContainerContentTwo() {
  return (
    <div className="mt-9 text-center md:px-44">
      <h1 className="text-gray-800 font-roboto font-semibold text-2xl md:text-4xl md:font-bold">
        OUR <span className="text-amber-500">PROJECTS</span>
      </h1>
      <div className="my-6 grid grid-cols-2 items-center px-4 md:px-0">
        <ContentTwo icons={icons} />
      </div>
      <div className="mb-2">
        <h1 className="text-gray-900 font-roboto font-semibold text-xl">
          <span className="text-amber-500">TOTAL</span> PROJECTS
          <span className="text-amber-500 text-3xl"> 82</span>
        </h1>
      </div>
      <div>
        <h1 className="text-gray-900 font-roboto font-semibold text-xl">
          <span className="text-amber-500">SATISFIED</span> CUSTOMERS
          <span className="text-amber-500 text-3xl"> 47</span>
        </h1>
      </div>
    </div>
  );
}
