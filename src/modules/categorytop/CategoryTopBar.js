import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navigation } from "swiper";
import { getCategories, setCategoryTab } from "../../app/features/productSlice";
import { Swiper, SwiperSlide } from "swiper/react";

const CategoryTopBar = () => {
  const categoryRef = useRef();

  const handleReachEnd = () => {
    if (categoryRef) {
      categoryRef.current.children[2].style.display = "none";
      categoryRef.current.children[1].style.removeProperty("display");
    }
  };

  const handleReachBeginning = () => {
    if (categoryRef) {
      categoryRef.current.children[1].style.display = "none";
      categoryRef.current.children[2].style.removeProperty("display");
    }
  };
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleTabCategory = (category) => {
    dispatch(setCategoryTab(category));
  };
  if (!categories) return;
  return (
    <div className="text-sm leading-4 bg-white h-11">
      <div className="py-4 mx-44">
        <Swiper
          slidesPerView={11}
          slidesPerGroup={11}
          navigation={true}
          modules={[Navigation]}
          ref={categoryRef}
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBeginning}
          onInit={handleReachBeginning}
          className="category-topbar"
        >
          <span className="flex overflow-hidden transition-all ">
            {categories.map((category) => (
              <SwiperSlide key={category._id}>
                <NavLink
                  to={`/catalog/${category.slug}`}
                  className="px-4 uppercase whitespace-nowrap"
                  key={category._id}
                  onClick={() => handleTabCategory(category)}
                >
                  {category.name}
                </NavLink>
              </SwiperSlide>
            ))}
          </span>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryTopBar;
