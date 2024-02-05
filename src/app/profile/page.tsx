import Image from "next/image";
import Header from "../../components/layouts/Header";
import Sidebar from "../../features/portfolio/components/Sidebar";

export default function Profile() {
  return (
    <div className="relative min-h-screen w-full lg:flex">
      <Sidebar />
      <div className="h-auto bg-[#01060f] lg:h-screen lg:w-2/3">
        <Header />
        <div className=" mx-12 flex flex-col-reverse items-center justify-center py-8 text-slate-300 md:py-16 lg:mx-24 lg:mt-24 xl:flex-row xl:items-start">
          <div className="lg:hidden xl:block xl:w-1/2">
            <Image
              src="/profileImage.jpeg"
              alt="profileImg"
              width={400}
              height={400}
            />
          </div>
          <div className=" mb-8 md:mx-3 xl:w-1/2">
            <div className="mb-4">
              <h1 className=" text-5xl">Profile</h1>
            </div>
            <p className=" mb-3">
              私は長野県住在の24歳、猪又星南と申します。
              <br />
              常に挑戦し続ける人生にしたいという思いから約二年間務めたゼネコンを退職し、現在WEBエンジニアを目指して就職活動をしています。
              もともとプログラミングについての知識は全く無くゼロからのスタートでしたが、私の性格上一つのことを突き詰めて研鑽していく作業が好きで、得意分野だと思っているので、
              仕事をしながら勉強していくことも苦ではありませんでした。
              プログラミング自体は昨年４月から本格的に勉強を開始し2025年１月現在、React,Next.js,Typescriptなどのモダンなフロントエンド技術を中心に更なる成長を求めて勉強中です。
            </p>
            <p>
              趣味：読書　スポーツ（剣道、サッカーやってました）　ゲーム　スノーボード　
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
