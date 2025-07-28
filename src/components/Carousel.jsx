import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

export default function Carousel({ data, onSelect }) {
    return (
        <div className="absolute bottom-0 left-20 w-[calc(100%-5rem)] px-6 pb-6 z-30">
            <h2 className="text-xl font-semibold text-white mb-4">Trending Now</h2>

            <Swiper
                modules={[Scrollbar]}
                spaceBetween={16}
                slidesPerView="auto"
                scrollbar={{ draggable: true }}
                className="pr-6"
            >
                {data.map((video) => (
                    <SwiperSlide
                        key={video.Id}
                        className="!w-[clamp(120px,20vw,200px)]"
                    >
                        <div
                            onClick={() => onSelect(video)}
                            className="cursor-pointer rounded-lg overflow-hidden"
                        >
                            <img
                                src={`assets/${video.CoverImage}`}
                                alt={video.Title}
                                className="w-full aspect-[2/3] object-cover transition-transform duration-300 hover:scale-105 rounded-[0.5rem]"
                            />
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
}
