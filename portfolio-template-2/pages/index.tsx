/* eslint-disable @next/next/link-passhref */

import { Main } from "../components/Main";
import {Section} from "../components/Section"
export default function App() {
  return (
    <div className="flex flex-col relative text-white">
    {/* <div className="bg-black h-screen relative z-50 flex flex-col justify-center items-center w-full ">
      <Main />
      <h1 className="text-7xl my-10 font-bold ">Welcome</h1>
      <p className="text-3xl font-bold ">
        Next js Particles js Starter with custom image 
      </p>
    </div>    */}
  <div className="bg-black  flex flex-col justify-center items-center w-full ">
      <Section />
      <h1 className="text-7xl my-10 font-bold ">Welcome</h1>
      <p className="text-3xl font-bold ">
        Next js Particles js Starter with custom image 
      </p>
    </div>
    </div>
  );
}
