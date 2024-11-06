import ListToggleNavBar from "../NavBar/ListToggleNavBar";

export default function Footer() {
  return (
    <div>
      <div className="px-8 mt-28 md:flex md:items-end md:justify-between">
        <ContentFooter />
        <div className="hidden md:block">
          <ListToggleNavBar />
        </div>
      </div>

      <div className="text-gray-800 text-center mt-14 font-poppins text-sm">
        <h1>All Rights Reserved © 2021 RAYONIT Privacy Policy</h1>
      </div>
    </div>
  );
}

function ContentFooter() {
  return (
    <div className="font-roboto">
      <div>
        <h1 className="text-amber-500">ADDRESS:</h1>
        <p>
          Rr. Reshit Petrela, Kompleksi Usluga, Kati 2, Tiranë - Albania, Nipt:
          L72206043S
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        <div>
          <h1 className="text-amber-500">PH.NO:</h1>
          <h2>+355 xxxxxxxxxxxx</h2>
        </div>
        <div>
          <h1 className="text-amber-500">E-MAIL:</h1>
          <h2>info@rayonit.com</h2>
        </div>
      </div>
    </div>
  );
}

function Icons() {}
