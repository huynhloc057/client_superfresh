import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategories, setCategoryTab } from "../../app/features/productSlice";

const ListItemsCategory = () => {
  const { categories } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleTabCategory = (category) => {
    dispatch(setCategoryTab(category));
    dispatch(getCategories());
  };
  if (Object.keys(categories).length === 0) {
    return null;
  }
  return (
    <div className="flex w-full my-8 bg-white">
      <div className="px-[15px] mx-auto">
        <div className="pt-[10px] px-0 pb-[30px] text-center">
          <div className="p-0 m-0">
            <h2 className="text-[24px] leading-[1.3] m-0 font-bold uppercase">
              DANH MỤC SẢN PHẨM
            </h2>
          </div>
        </div>
        <div className="pt-0 px-0 my-0 mx-[-15px] overflow-hidden">
          <div className="relative p-0 m-0 overflow-hidden">
            <div className="opacity-[1] m-0 relative top-0 left-0 right-0 inline-flex flex-wrap">
              {categories &&
                categories.map((category) => (
                  <div
                    key={category._id}
                    className="w-[154px] inline-block py-0 px-[15px] mt-0 mb-[10px] mx-0 text-center"
                  >
                    <div className=" hover:bg-[#D2EBB2] relative pb-[100%] rounded-full mt-0 mx-auto mb-[15px] text-center overflow-hidden box-border">
                      <NavLink
                        to={`/catalog/${category.slug}`}
                        className="whitespace-nowrap text-[#00381a]"
                        key={category._id}
                        onClick={() => handleTabCategory(category)}
                      >
                        <img
                          className="absolute top-0 left-0 right-0 object-cover w-full h-full p-5 mx-auto my-0 rounded-full"
                          src={category?.categoryImage[0]?.img}
                          alt={category.name}
                        />
                      </NavLink>
                    </div>
                    <div className="box-border p-0 m-0">
                      <h3 className="text-[15px] font-[500] mt-0 mx-[10px] mb[10px] leading-[1.2] text-[#003f1f]">
                        <NavLink
                          to={`/catalog/${category.url_path}`}
                          className="text-[#00381a] leading-[1.1] uppercase"
                          key={category.id}
                          onClick={() => handleTabCategory(category)}
                        >
                          {category.name}
                        </NavLink>
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ListItemsCategory;
