import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/hash-navigation";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";
import banner1 from "../../image/banner1.png";
import banner2 from "../../image/banner2.png";
import banner3 from "../../image/banner3.png";
import banner4 from "../../image/banner4.png";
import banner5 from "../../image/banner5.png";
import banner6 from "../../image/banner6.png";


export const events = [
  {
    id: 1,
    url: `${banner1}`,
  },
  {
    id: 2,
    url: `${banner2}`,
  },
  {
    id: 3,
    url: `${banner3}`,
  },
  {
    id: 4,
    url: `${banner4}`,
  },
  {
    id: 5,
    url: `${banner5}`,
  },
  {
    id: 6,
    url: `${banner6}`,
  }
];

const Banner = () => {
  return (
    <div className="flex w-full bg-white cursor-pointer">
      <div className="flex w-full overflow-hidden gap-x-3 xl:mx-0">
        <section className="max-w-full xl:h-full rounded-lg md:h-[300px]  select-none ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="event-slider"
          >
            {events.length > 0 &&
              events.map((item) => (
                <SwiperSlide key={item.id}>
                  <img className="m-auto object-fill" src={item.url} alt={item.id} />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Banner;
