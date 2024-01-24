import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Contact() {
  return (
    <div className="min-h-screen w-full flex relative">
      <Sidebar />
      <div className="bg-[#01060f] w-2/3 h-screen">
        <Header />
        <div className=" flex flex-col justify-center mt-36 mx-24 p-8 text-slate-300">
          <div className=" mb-10">
            <h1 className=" text-5xl">Contact</h1>
          </div>
          <div>
            <ul>
              <li className=" mb-1">e-mail:</li>
              <li className=" mb-1">Green:</li>
              <li className="mb-1">Wantedly:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
