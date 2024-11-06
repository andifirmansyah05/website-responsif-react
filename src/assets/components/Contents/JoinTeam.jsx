export default function JoinTeam() {
  return (
    <div className="p-8 mt-3 md:px-72 ">
      <div className="bg-red-200 rounded-3xl p-6 font-roboto md:px-32">
        <BecomeUs />
        <ApplyNow />
      </div>
    </div>
  );
}

function BecomeUs() {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold text-red-600">BECOME ONE OF US!</h1>
      <p className="text-gray-800 my-8">
        You are an Engineer? Creative Person? Digital Specialist? Join our team!
        Hard working individuals are always welcome in our company
      </p>
    </div>
  );
}

function ApplyNow() {
  return (
    <div className="flex items-center justify-center gap-6 mt-9 md:justify-between">
      <div>
        <h1 className="text-xl font-bold text-red-600">WE ARE HIRING</h1>
        <div className="text-gray-800 ">
          <h2>Senior Java Developer</h2>
          <h2>FrontEnd Developer</h2>
        </div>
      </div>
      <div>
        <button className="text-red-800 text-sm bg-white px-3 py-2 font-bold md:px-6 md:py-3 md:text-lg">Apply now</button>
      </div>
    </div>
  );
}
