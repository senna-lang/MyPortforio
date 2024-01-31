"use client";
import { Slider } from "../../../../components/elements/Slider";
import { Modal } from "@mantine/core";
import { useAppContext } from "@/app/context/AppContext";

const PortfolioModal = () => {
  const { isPortfolioModalOpen, setIsPortfolioModalOpen } = useAppContext();

  const notionImages: string[] = [
    "/slider/Notion1.jpg",
    "/slider/Notion2.png",
    "/slider/Notion3.png",
  ];
  return (
    <Modal
      opened={isPortfolioModalOpen}
      onClose={() => setIsPortfolioModalOpen(false)}
      size="90%"
      transitionProps={{
        transition: "scale",
        duration: 200,
        timingFunction: "linear",
      }}
    >
      <div className=" modal flex flex-col xl:flex-row">
        <div className=" p-5 xl:w-1/3">
          <h2 className=" mb-3 text-center text-2xl">My Portfolio</h2>
          <p className=" mb-4">
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認す
          </p>
          <h2 className=" mb-3 text-center text-2xl">使用技術</h2>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミ
          </p>
        </div>
        <div className="p-6 xl:w-2/3">
          <Slider images={notionImages} />
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioModal;
