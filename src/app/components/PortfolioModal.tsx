'use client';
import { Slider } from './Slider';
import { Modal } from '@mantine/core';
import { useAppContext } from '@/context/AppContext';

const PortfolioModal = () => {
  const { isPortfolioModalOpen, setIsPortfolioModalOpen } = useAppContext();

  const notionImages: string[] = [
    '/slider/Notion1.jpg',
    '/slider/Notion2.png',
    '/slider/Notion3.png',
  ];
  return (
    <Modal
      opened={isPortfolioModalOpen}
      onClose={() => setIsPortfolioModalOpen(false)}
      size="90%"
      transitionProps={{
        transition: 'scale',
        duration: 200,
        timingFunction: 'linear',
      }}
    >
      <div className=" modal flex">
        <div className=" w-1/3 p-5">
          <h2 className=" text-center text-2xl mb-3">My Portfolio</h2>
          <p className=" mb-4">
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認す
          </p>
          <h2 className=" text-center text-2xl mb-3">使用技術</h2>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミ
          </p>
        </div>
        <div className="w-2/3 p-6">
          <Slider images={notionImages} />
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioModal;
