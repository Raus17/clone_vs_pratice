import Image from "next/image";
import Header from "./Components/Header";
import Test from "./Components/Test";
import Mainbanner from "./Components/Mainbanner";
import Body1 from "./Components/Body1";

export default function Home() {
  return (
    <div>
      <Header/>
      <Mainbanner/>
      <Body1/>
    </div>
  );
}
