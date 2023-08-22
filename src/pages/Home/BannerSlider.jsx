

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from "../../assets/banner.jpg"
import slide2 from "../../assets/istockphoto-1411782642-612x612.jpg"
import slide3 from "../../assets/istockphoto-486655342-612x612.jpg"

// import required modules
import { Autoplay,  Navigation } from "swiper/modules";

const BannerSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={250}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="w-full h-[800px] object-cover	" src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[800px] object-cover	" src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[800px] object-cover	" src={slide3} alt="" /></SwiperSlide>

   
      </Swiper>
    </div>
  );
};

export default BannerSlider;
