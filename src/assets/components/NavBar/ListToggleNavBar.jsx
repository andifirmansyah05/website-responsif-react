import english from "../../svg/english.svg";

export default function ListToggleNavBar() {
  return (
    <ul className="flex flex-col gap-2 py-2 items-center font-roboto font-medium md:flex-row md:px-4 md:gap-12 ">
      <li className="hover:text-amber-500">
        <a href="">PRODUCTS</a>
      </li>
      <li className="hover:text-amber-500">
        <a href="">OUT TEAM</a>
      </li>
      <li className="hover:text-amber-500">
        <a href="">CONTACT</a>
      </li>
      <li className="flex flex-row gap-1 justify-center items-center hover:text-amber-500">
        <a href="">
          <h1>ENG</h1>
        </a>
        <img className="w-5 h-5 rounded-full" src={english} alt="svg-english" />
      </li>
    </ul>
  );
}
