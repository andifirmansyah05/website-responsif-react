// import { useState } from "react";
// import ListNavBar from "./ListNavBar";

export default function NavBar({ children, children2 }) {
  return (
    <div className=" p-3 md:flex md:justify-between ">
      {children}
      {children2}
    </div>
  );
}
