import React from "react";
import clsx from "clsx";
import ContentHeader from "../shipping_components/ContentHeader";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "../../button";
import {
  addDeliveryInfo,
  setAddress,
} from "../../../app/features/addressSlice";
import { useNavigate } from "react-router";
import useLocationForm from "./useLocationForm";
import InputShipping from "./InputShipping";
import Select from "react-select";
function ShippingForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },

    reset,
  } = useForm();
  const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } =
    useLocationForm(true);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;
  const { address: addressDelivery } = useSelector((state) => state.address);
console.log(addressDelivery)
  const handleSubmitAddress = (dataAddress) => {
    const temp = onSubmit(dataAddress);
    console.log("temp", temp);
    const { selectedCity, selectedDistrict, selectedWard } = temp;
    const { name, phoneNumber } = dataAddress;
    console.log(dataAddress);
    const address =
      dataAddress.address +
      " " +
      selectedWard +
      " " +
      selectedDistrict +
      " " +
      selectedCity;
    console.log("address", address);
    dispatch(
      addDeliveryInfo({ ...addressDelivery, name, phoneNumber, address })
    );
    reset();
    navigate("/cart");
  };

  return (
    <div className={clsx("max-w-[79rem]", "m-auto", "mt-6", "mb-6")}>
      <ContentHeader />
      <div className="flex items-center justify-center py-3 pt-10 pb-10 border">
        <form onSubmit={handleSubmit(handleSubmitAddress)}>
          <div className="xl:w-auto">
            <div className="flex items-center pb-4">
              <span className="font-bold w-[180px] min-w-[180px]">
                Họ và tên
              </span>
              <div className="w-[400px]">
                <InputShipping
                  className="border-[#cccccc] rounded border-solid border-[1px] w-[400px] items-center h-[38px] px-2 focus:border-[#2684FF] focus:shadow-[0_0_0_1px_#2684ff]"
                  control={control}
                  name="name"
                  placeholder="Jhon Doe"
                  autoComplete="off"
                  defaultValue={addressDelivery.name}
                  error={errors.name?.message}
                  required
                ></InputShipping>
              </div>
            </div>
            <div className="flex items-center pb-4">
              <span className="font-bold w-[180px] min-w-[180px] ">
                Số điện thoại
              </span>
              <div className="w-[400px]">
                <InputShipping
                  className="border-[#cccccc] rounded border-solid border-[1px] w-[400px] items-center h-[38px] px-2 focus:border-[#2684FF] focus:shadow-[0_0_0_1px_#2684ff]"
                  control={control}
                  name="phoneNumber"
                  placeholder="094143124214"
                  autoComplete="off"
                  error={errors.name?.message}
                  required
                ></InputShipping>
              </div>
            </div>
            <div className="flex items-center pb-4">
              <span className="font-bold w-[180px] min-w-[180px] ">
                Tỉnh/Thành phố
              </span>
              <Select
                className="w-[400px]"
                name="cityId"
                key={`cityId_${selectedCity?.value}`}
                isDisabled={cityOptions.length === 0}
                options={cityOptions}
                onChange={(option) => onCitySelect(option)}
                placeholder="Chọn Tỉnh/Thành phố"
                control={selectedCity}
                defaultValue={selectedCity}
              />
            </div>
            <div className="flex items-center pb-4">
              <span className="font-bold w-[180px] min-w-[180px] ">
                Quận/Huyện
              </span>
              <Select
                className="w-[400px]"
                name="districtId"
                key={`districtId_${selectedDistrict?.value}`}
                isDisabled={districtOptions.length === 0}
                options={districtOptions}
                onChange={(option) => onDistrictSelect(option)}
                placeholder="Chọn Quận/Huyện"
                defaultValue={selectedDistrict}
              />
            </div>
            <div className="flex items-center pb-4">
              <span className="font-bold w-[180px] min-w-[180px] ">
                Phường/Xã
              </span>
              <Select
                className="w-[400px]"
                name="wardId"
                key={`wardId_${selectedWard?.value}`}
                isDisabled={wardOptions.length === 0}
                options={wardOptions}
                placeholder="Chọn Phường/Xã"
                onChange={(option) => onWardSelect(option)}
                defaultValue={selectedWard}
              />
            </div>
            <div className="flex items-center pb-0">
              <span className="font-bold w-[180px] min-w-[180px]">Địa chỉ</span>
              <div className="w-[400px]">
                <InputShipping
                  className="border-[#cccccc] rounded border-solid border-[1px] w-[400px] items-center h-[38px] px-2 focus:border-[#2684FF] focus:shadow-[0_0_0_1px_#2684ff]"
                  control={control}
                  name="address"
                  placeholder="01 Võ Văn Ngân"
                  autoComplete="off"
                  error={errors.name?.message}
                  required
                ></InputShipping>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-6 flex-col-2 pl-[180px]">
            <Button type="submit" className=" bg-[#008641]">
              Giao đến địa chỉ này
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShippingForm;
