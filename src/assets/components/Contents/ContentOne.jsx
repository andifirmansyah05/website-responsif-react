

export default function ContentOne({contentOne}) {
  return (
    <>
      {contentOne.map((s, i) => (
        <div key={i} className="flex flex-col  items-center px-8 font-roboto">
          <div>
            <img className="w-20 h-20" src={s.url} />
          </div>
          <h1 className="text-amber-500 text-xl font-semibold">{s.title}</h1>
          <p className="text-justify text-gray-500 mt-2">{s.desription}</p>
        </div>
      ))}
    </>
  );
}
