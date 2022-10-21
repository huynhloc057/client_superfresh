import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useSelector } from "react-redux";
import useLocationForm from '../shipping/shipping_content/useLocationForm';

export default function RightbarEditAddress() {
    const cityRef = useRef();
    const districtRef = useRef();
    const wardRef = useRef();
    const { register, handleSubmit, control,formState: { errors },reset } = useForm();
    const {  state, onCitySelect, onDistrictSelect, onWardSelect } = useLocationForm(true);

    const {
        cityOptions,
        districtOptions,
        wardOptions,
        selectedCity,
        selectedDistrict,
        selectedWard,
    } = state;
    const { userInfo } = useSelector((state) => state.auth);

    const onSubmit = (data) => {
        const info = {
          ...data,
          City: cityRef.current.props.value.label,
          District: districtRef.current.props.value.label,
          Ward:wardRef.current.props.value.label
        };
        console.log(info);
        reset();
      };
   
    return (
        <div className="mr-32 basis-10/12 h-fit pb-12" >
            <div className="mt-2 mb-3 text-xl">Tạo sổ địa chỉ</div>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white h-fit py-[30px] px-[20px]'>
                <div className='flex items-center flex-1 justify-between w-[600px] mb-4 h-[34px]'>
                    <label className='text-[13px]'>Họ và tên:</label>
                    <input control={control} name='Full Name' {...register("Full Name")} error={errors.name?.message} required className='py-[6px] px-[12px] w-[490px]  text-[14px] border border-zinc-300 rounded' placeholder='Nhập họ và tên' defaultValue={`${userInfo?.user?.name}`}></input>
                </div>
                <div className='flex items-center flex-1 justify-between w-[600px] mb-[15px]'>
                    <label className='text-[13px]'>Công ty:</label>
                    <input control={control} name='Company' {...register("Company")} error={errors.name?.message} required className='py-[6px] px-[12px] w-[490px]  text-[14px] border border-zinc-300 rounded' placeholder='Nhập công ty'></input>
                </div>
                <div className='flex items-center flex-1 justify-between w-[600px] mb-[15px]'>
                    <label className='text-[13px]'>Số điện thoại:</label>
                    <input control={control} name='Phone' {...register("Phone")}error={errors.name?.message} required className='py-[6px] px-[12px] w-[490px] text-[14px] border border-zinc-300 rounded' placeholder='Nhập số điện thoại'></input>
                </div>
                <div className='flex items-center flex-1 justify-between w-[600px] mb-[15px]'>
                    <label className='text-[13px]'>Tỉnh/Thành phố:</label>
                    <Select className='w-[490px] text-[14px] '
                        name="cityId"
                        key={`cityId_${selectedCity?.value}`}
                        isDisabled={cityOptions.length === 0}
                        options={cityOptions}
                        onChange={(option) => onCitySelect(option)}
                        placeholder="Chọn Tỉnh/Thành phố"
                        control={selectedCity}
                        defaultValue={selectedCity}
                        ref={cityRef}
                    ></Select>
                </div>
                <div className='flex items-center flex-1 justify-between w-[600px] mb-[15px]'>
                    <label className='text-[13px]'>Quận huyện:</label>
                    <Select className='w-[490px] text-[14px]'
                        name="districtId"
                        key={`districtId_${selectedDistrict?.value}`}
                        isDisabled={districtOptions.length === 0}
                        options={districtOptions}
                        onChange={(option) => onDistrictSelect(option)}
                        placeholder="Chọn Quận/Huyện"
                        defaultValue={selectedDistrict}
                        ref={districtRef}
                    ></Select>
                </div>
                <div className='flex items-center flex-1 justify-between w-[600px] mb-[15px]'>
                    <label className='text-[13px]'>Phường xã:</label>
                    <Select className='w-[490px] text-[14px]'
                        name="wardId"
                        key={`wardId_${selectedWard?.value}`}
                        isDisabled={wardOptions.length === 0}
                        options={wardOptions}
                        placeholder="Chọn Phường/Xã"
                        onChange={(option) => onWardSelect(option)}
                        defaultValue={selectedWard}
                        ref={wardRef}
                    ></Select>
                </div>
                <div className='flex items-center flex-1 justify-between w-[600px] mb-[15px]'>
                    <label className='text-[13px]'>Địa chỉ:</label>
                    <textarea control={control} {...register("Address")} name='Address' error={errors.name?.message} required className='py-[6px] px-[12px] w-[490px] h-[95px]  text-[14px] border border-zinc-300 rounded' placeholder='Nhập địa chỉ'></textarea>
                </div>

                <div className='flex items-center flex-1 justify-between w-[600px] mb-[15px]'>
                    <label className='text-[13px]'>&nbsp;</label>
                    <div className=' w-[490px] h-[95px] '>
                       
                            <button className='w-[190] h-9 bg-amber-400 rounded py-2 px-7 text-slate-600 text-[14px]' type='submit'>Cập nhật</button>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}
