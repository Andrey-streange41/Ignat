import { useEffect, useRef, useState } from "react";
import HotproductSliderPagination from "../../atoms/HotProductsSliderPagination/HotproductSliderPagination";
import ArrowIcon from "../../atoms/Icons/ArrowIcon/ArrowIcon";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { comments } from "../../../utils/consts";
import CommentSlide from "../../atoms/CommentSlide/CommentSlide";

const CommentsSlider = () => {
  const [prevActive, setPrevActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const next = document.querySelectorAll(`.swiper-pagination-total`)[1];
    const total = !isNaN(Number(next?.innerHTML)) ? Number(next?.innerHTML) : 0;
    setTotalSlides(total);
    if (total > 1) {
      setNextActive(true);
    }
  }, []);

  const handleSlideChange = () => {
    if (!sliderRef.current) return;
    //@ts-ignore
    const currentIndex = sliderRef.current.swiper.activeIndex;
    if (currentIndex < 1 || totalSlides <= 1) {
      setPrevActive(false);
    } else {
      setPrevActive(true);
    }
    if (totalSlides - 1 > currentIndex) {
      setNextActive(true);
    } else {
      setNextActive(false);
    }

    setCurrentIndex(
      //@ts-ignore
      +sliderRef.current.swiper.pagination.el.firstChild.innerHTML
    );
  };

  return (
    <div className={"hot-product-slider"}>
      <div className="hot-product-slider-header">
        <h2 style={{marginLeft:'30px'}} className={"hot-product-slider-title"}>Відгуки наших клієнтів</h2>
        <div className="hot-product-slider-right-menu">
          <HotproductSliderPagination
            current={currentIndex}
            total={totalSlides}
          />
          <div className="navigation">
            <div className={"prev-button"} ref={navigationPrevRef}>
              <ArrowIcon direction="left" disabled={!prevActive} />
            </div>
            <div className={"next-button"} ref={navigationNextRef}>
              <ArrowIcon direction="right" disabled={!nextActive} />
            </div>
          </div>
        </div>
      </div>

      <Swiper
        onSlideChange={handleSlideChange}
        ref={sliderRef}
        pagination={{
          type: "fraction",
        }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        modules={[Pagination, Navigation]}
        className="my-slider"
        slidesPerView={4}
        spaceBetween={2}
        grabCursor
      >
        {comments.map((it) => (
          <SwiperSlide
            key={Math.random().toString(16)}
            className="swiper-slide"
          >
            <CommentSlide
              avatar={it.avatar}
              comment={it.comment}
              key={it.comment}
              username={it.username}
              rating={it.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommentsSlider;
