import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

type ImageProps = {
  images: string[];
};

export const Slider: React.FC<ImageProps> = props => {
  return (
    <div className=" h-full flex flex-col justify-center">
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true,
          interval: 4000,
          rewind: true,
          speed: 1000,
        }}
      >
        {props.images.map((image: string) => (
          <SplideSlide key={image}>
            <Image
              className="slide-img"
              src={image}
              alt="SliderImage"
              width={1280}
              height={852}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
