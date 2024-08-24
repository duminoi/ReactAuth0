import React from "react";
import { Atom } from "react-loading-indicators";

export default function Spinner() {
  return (
    <div className="flex bg-transparent items-center justify-center h-screen">
      <div className="absolute inset-0 bg-transparent z-0"></div>
      <Atom className="z-10" />
    </div>
  );
}
