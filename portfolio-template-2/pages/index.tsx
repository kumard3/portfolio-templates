/* eslint-disable @next/next/link-passhref */

import { Main } from "../components/Main";
import {Section} from "../components/Section"
export default function App() {
  return (
    <>
    <div className="bg-black min-h-screen flex flex-col justify-center items-center w-full ">
      <Section />
      <h1 className="text-7xl my-10 font-bold ">Welcome</h1>
      <p className="text-3xl font-bold ">
        Next js Particles js Starter with custom image 
      </p>
    </div>
    </>
  );
}
