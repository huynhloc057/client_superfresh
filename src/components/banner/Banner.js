import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/hash-navigation";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";

const Banner = ({ events }) => {
  if (!events) return;
  return (
    <div className="flex w-full bg-white cursor-pointer">
      <div className="flex w-full overflow-hidden gap-x-3 xl:mx-0">
        <section className="max-w-full rounded-lg select-none xl:h-full ">
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
                  <img
                    className="object-cover m-auto"
                    src={item.url}
                    alt={item.id}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Banner;
