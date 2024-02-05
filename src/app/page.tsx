import Image from "next/image";
import Header from "../components/layouts/Header";
import CanvasWrapper from "../components/geos/CanvasWrapper";
import GeoStars from "../components/geos/GeoStars";
import GeoText from "../components/geos/GeoText";
import TopPageSidebar from "../features/portfolio/components/TopPageSidebar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full lg:flex">
      <div className=" absolute top-48 z-10 opacity-0 2xl:left-[calc(33.3%-200px)] 2xl:opacity-100">
        <Image
          src="/profileImage.jpeg"
          alt="profileImg"
          width={400}
          height={400}
          priority
        />
      </div>
      <TopPageSidebar />
      <div className="-z-0 flex h-screen flex-col bg-[#01060f] lg:w-2/3">
        <Header />
        <div className="w-full flex-grow">
          <CanvasWrapper>
            <GeoStars />
            <GeoText />
          </CanvasWrapper>
        </div>
      </div>
    </div>
  );
}
