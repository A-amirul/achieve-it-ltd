import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Clients.css";
import { Autoplay, Pagination, Grid } from "swiper/modules";

import img1 from "../../assets/clients/1.jpg";
import img3 from "../../assets/clients/2.jpg";
import img4 from "../../assets/clients/3.jpg";
import img5 from "../../assets/clients/11.jpg";
import img6 from "../../assets/clients/5.jpg";
import img7 from "../../assets/clients/9.jpg";
import img8 from "../../assets/clients/7.jpg";
import img9 from "../../assets/clients/8.jpg";
import img10 from "../../assets/clients/10.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <h1 className="text-center font-semibold text-4xl mt-10 my-4">
        Our Clients{" "}
      </h1>
      <p className="text-slate-500 text-center my-4 font-medium pb-8">
        We are trusted by industry leaders
      </p>

      <div className="">
        <Swiper
          spaceBetween={0}
          slidesPerView={6}
          grid={{
            rows: 1,
          }}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Grid]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img10} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
