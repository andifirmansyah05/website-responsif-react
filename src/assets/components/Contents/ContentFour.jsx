import designer from "../../img/designer.png";
import developer from "../../img/developer.png";
import analyst from "../../img/analyst.png";


const dataPeranTim = [
  {
    title: "DESIGNER",
    description:
      " The Designer is the translator of aesthetics and functional needs of a specific  sector such as  road systems, IT or management, in simple, intuitive and  user  interface  (UI,  UX,  GRAPHIC DESIGN). This process uses processes and innovative projecting technique (design sprint).",
    url: designer,
  },
  {
    title: "DEVELOPER",
    description:
      " The Developer often faces problems or projects that require specific solutions. By using technologies such as JAVA, SCALA, FUNCTIONAL PROGRAMMING, etc., the result is a complex project within the team, offering new experiences and increasing industry opportunities for growth.",
    url: developer,
  },
  {
    title: "ANALYST",
    description:
      "The Functional Analyst is responsible for the success, opportunity, development, creation, and external collaboration of a project. While managing complex information systems, RAYONIT aims to inspire new ideas and expand into new markets.",
    url: analyst,
  },
];

export default function ContentFour() {
  return (
    <div className="grid grid-cols-1 gap-y-6 px-8 mt-12 md:px-72">
      {dataPeranTim.map((d, i) => (
        <div key={i} className="flex flex-col items-center w-full md:flex-row">
          <div className={`md:${d.title === "DEVELOPER" ? "hidden" : "block"}`}>
            <img className="w-44 md:w-96" src={d.url} alt={`foto ${d.title}`} />
          </div>
          <div className="md:px-9">
            <h1
              className={`${
                d.title === "DEVELOPER" ? "md:text-right" : "text-left"
              } text-lg font-bold text-amber-500`}
            >
              {d.title}
            </h1>
            <p className="text-justify">{d.description}</p>
          </div>
          <div className={`hidden md:${d.title === "DEVELOPER" ? "block" : "hidden"}`}>
            <img className="w-44 md:w-96" src={d.url} alt={`foto ${d.title}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
