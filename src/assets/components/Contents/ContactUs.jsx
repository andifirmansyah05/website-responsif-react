export default function ContactUs() {
  return (
    <div className="px-8 md:px-72">
      <div>
        <h1 className="font-roboto text-2xl font-bold text-gray-800 text-center mb-4 md:text-4xl ">
          CONTACT <span className="text-amber-500">US</span>
        </h1>
        <Form />
      </div>
    </div>
  );
}

function Form() {
  return (
    <form action="">
      <div className="flex flex-col h-60 font-roboto text-sm md:px-20 md:text-base">
        <div className="grid grid-cols-2 gap-2 ">
          <input className="h-8 px-2 rounded-md focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 border border-gray-200"  type="text" placeholder="Name" />
          <input className="h-8 px-2 rounded-md focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 border border-gray-200"  type="text" placeholder="E-mail" />
        </div>
        <div className="mt-2 grow">
            <textarea placeholder="Messege" className="w-full h-full p-2 rounded-md border border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" name="message" id="message"></textarea>
        </div>
        <div className="flex items-center justify-center mt-2 ">
          <button className="bg-amber-500 px-8 font-bold py-1 shadow">Submit</button>
        </div>
      </div>
    </form>
  );
}
