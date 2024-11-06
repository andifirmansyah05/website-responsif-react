export default function ContentThree() {
  return (
    <div className="font-roboto px-8 flex flex-col gap-y-10 text-center mt-10">
      <OurTeam />
      <DescriptionTeam />
      <Quotes />
    </div>
  );
}

function OurTeam() {
  return (
    <div>
      <h1 className="text-3xl font-bold md:text-4xl">
        OUR <span className="text-amber-500">TEAM</span>
      </h1>
      <div className="text-gray-800 text-xl mt-2">
        <p>&quot;We work on innovative projects and develop ideas.&quot;</p>
        <p>&quot;Knowing the topic is just the starting point&quot;</p>
      </div>
    </div>
  );
}

function DescriptionTeam() {
  return (
    <div>
      <h1 className="text-amber-500 text-xl font-bold md:text-2xl">YOUNG AND DYNAMIC TEAM</h1>
      <p className="text-gray-800 mt-2 md:px-80">
        We are a close young group, consisting in professionals of different
        technologies and consulting areas, constructing a dynamic and
        multidisciplinary experienced team with know-how and complementary
        background.
      </p>
    </div>
  );
}

function Quotes() {
  return (
    <div>
      <p className="text-gray-700 text-lg">Let’s take a closer look on how our productive team is created</p>
    </div>
  );
}
