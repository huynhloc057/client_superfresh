import React, { useImperativeHandle, useRef, forwardRef } from "react";

function ComboboxAddress(props, ref) {
  const [data, setData] = React.useState([]);
  const [indexCity, setIndexCity] = React.useState(0);
  const [indexDistrict, setIndexDistrict] = React.useState(0);

  React.useEffect(() => {
    fetch("https://provinces.open-api.vn/api/?depth=3")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const refCombox = useRef();

  useImperativeHandle(ref, () => {
    return {
      value: refCombox.current.target?.value,
    };
  });

  return (
    <div>
      <div className="pb-2 flex">
        <span className="font-bold w-[180px] min-w-[180px]">
          Tỉnh/Thành phố
        </span>
        <select
          type="province"
          className="
                form-control
                block
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                transition
                ease-in-out
                m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                items-center
                justify-center
                w-[25rem]
                rounded-md
                py-1"
          ref={refCombox}
          placeholder="Chọn Tỉnh/Thành phố"
          required
          onChange={(e) => {
            setIndexCity(e.target.selectedIndex - 1);
            console.log(e.target.value);
          }}
        >
          <option select="true">Chọn Tỉnh/Thành phố</option>
          {data.map((item, index) => (
            <option key={index} value={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="pb-2 flex">
        <span className="font-bold w-[180px] min-w-[180px]">Quận/Huyện</span>
        <select
          type="district"
          className="
                    form-control
                    block
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    transition
                    ease-in-out
                    m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    items-center
                    justify-center
                    w-[25rem]
                    rounded-md
                    py-1"
          placeholder="Chọn Quận/Huyện"
          required
          onChange={(e) => setIndexDistrict(e.target.selectedIndex - 1)}
        >
          <option select="true">Chọn Quận/Huyện</option>
          {data[indexCity]?.districts.map((item, index) => (
            <option key={index} value={index}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="pb-2 flex">
        <span className="font-bold w-[180px] min-w-[180px]">Phường/Xã</span>
        <select
          type="ward"
          className="
                    form-control
                    block
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    transition
                    ease-in-out
                    m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    items-center
                    justify-center
                    w-[25rem]
                    rounded-md
                    py-1

                    "
          placeholder="Chọn Phường/Xã"
          required
        >
          <option select="true">Chọn Phường/Xã</option>
          {data[indexCity]?.districts[indexDistrict]?.wards.map(
            (item, index) => (
              <option key={index} value={index}>
                {item.name}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}

export default forwardRef(ComboboxAddress);
