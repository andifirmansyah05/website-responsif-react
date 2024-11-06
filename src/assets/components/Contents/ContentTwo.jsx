export default function ContentTwo({ icons }) {
  return (
    <>
      {icons.map((icon, i) => (
        <div key={i} className=" flex flex-col items-center mb-4">
          <img className="w-16 md:w-32" src={icon.url} alt="icons" />
          <h1 className="font-roboto font-semibold text-xl">{icon.name}</h1>
        </div>
      ))}
    </>
  );
}
