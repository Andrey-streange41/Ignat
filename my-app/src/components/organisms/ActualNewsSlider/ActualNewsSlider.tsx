import SwiperCore, { Autoplay, Navigation, Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { actualNews } from "../../../utils/consts";
import './swiper.scss';


import SlideHeroItem from "../../atoms/SlideHeroItem/SlideHeroItem";

SwiperCore.use([Autoplay]);
const ActualNewsSlider = () => {
  return (
    <div className={'actualNews'}>
      <Swiper
        grabCursor
        spaceBetween={10}
        autoplay={{ delay: 5000 }}
        slidesPerView={"auto"}
        loop
        pagination
        navigation={true}
        modules={[Navigation, Thumbs, Pagination]}
        className={'newsList'}
      >
        {actualNews.map((it) => (
          <SwiperSlide key={it.title} className={'swiperSlide'}>
            <SlideHeroItem
              key={it.title}
              picture={it.picture}
              title={it.title}
              description={it.description}
              addinfoTitle={it.addinfoTitle}
              addinfoDescription={it.addinfoDescription}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActualNewsSlider;
