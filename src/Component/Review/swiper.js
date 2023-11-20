import React from "react";
import JaneCopper from "../../assets/reviewer/JaneCopper.svg";
import DevonLane from "../../assets/reviewer/devonLane.svg";
import RobertFox from "../../assets/reviewer/robertFox.svg";
import "./index.css";
import Card from "./card.js";
import { Navigation, Pagination } from "swiper/modules";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

const swiper = () => {
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        virtual
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: `.arrow-right`,
          prevEl: `.arrow-left`,
        }}
      >
        <SwiperSlide>
          <Card image={JaneCopper} name="Jane Copper" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={DevonLane} name="Devon Lane" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={RobertFox} name="Robert Fox" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={JaneCopper} name="Jane Copper" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={DevonLane} name="Devon Lane" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={RobertFox} name="Robert Fox" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default swiper;
