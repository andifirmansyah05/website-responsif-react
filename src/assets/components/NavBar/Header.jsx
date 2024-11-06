export default function Header() {
  return (
    <div className="h-96  flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center p-12 ">
        <h1 className="text-2xl font-bold font-poppins mb-3 md:text-6xl md:mb-8">Develop your Innovation</h1>
        <p className="font-poppins text-center text-gray-500 text-sm mb-3 md:text-base md:mb-6">
          “The innovation consists in seeing what everyone has seen and in thinking what no one has thought.”
        </p>
        <button className="bg-amber-500 font-poppins font-semibold px-4 py-1 text-sm md:text-base">Become one of us</button>
      </div>
    </div>
  );
}