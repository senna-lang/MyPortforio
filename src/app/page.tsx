import Image from 'next/image';

export default function Home() {
  return (
    <div className=" container mx-auto bg-slate-300 border">
      <div className=" flex flex-col justify-center ml-24 min-h-screen">
        <div className=" mb-20">
          <span className=" text-6xl font-semibold">Profile</span>
        </div>
        <div className=" mb-20">
          <span className=" text-6xl font-semibold">Works</span>
        </div>
        <div className=" mb-20">
          <span className=" text-6xl font-semibold">Skill set</span>
        </div>
        <div className=" mb-20">
          <span className=" text-6xl font-semibold">Git Hub</span>
        </div>
      </div>
    </div>
  );
}
