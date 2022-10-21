import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUserInfo } from "../../app/features/authSlice";

export default function EditPhone({ setPhone }) {
  const navigate = useNavigate();
  const formSchema = yup
    .object()
    .shape({
      newPhone: yup
        .number()
        .typeError("Số điện thoại không hợp lệ")
        .required("Vui lòng nhập số điện thoại")
        .min(10, "Số điện thoại không hợp lệ"),
    })
    .required();

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, getValues, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const { userDetail, password, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function onSubmit(data) {
    // setPhone(getValues("newPhone"));
    const phone = getValues("newPhone");
    console.log(phone);
    const info = { ...userDetail[0], phone, password };
    console.log(info);
    const userId = userInfo?.user?.id;

    dispatch(updateUserInfo({ info, toast, userId }));
    navigate("../profile");
    return false;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mr-32 basis-10/12"
      style={{ height: "700px" }}
    >
      <div className="mt-2 mb-3 text-xl">Cập nhật số điện thoại</div>
      <div className="flex items-center justify-center bg-white h-60">
        <div className="flex flex-col justify-between p-4 border-2 rounded w-96 h-fit border-slate-200">
          <div>
            <div className="text-sm">Số điện thoại</div>
            <div className="flex items-center justify-center w-full px-1 mt-1 border-2 rounded border-slate-300 focus:to-blue-300 h-9">
              <img
                className="w-6 h-6"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
                alt=""
              ></img>
              <input
                className="w-full pl-2 text-sm"
                type="text"
                name="newPhone"
                id="editPhone"
                maxLength={10}
                {...register("newPhone")}
                placeholder="Nhập số điện thoại"
              ></input>
            </div>
            <div className="mt-1 mb-3 text-xs text-red-500">
              {errors.newPhone?.message}
            </div>
            <div className="w-3 my-1">&nbsp;</div>
          </div>
          <button className="flex items-center justify-center w-full h-10 text-white bg-blue-500 rounded">
            Lưu thay đổi
          </button>
        </div>
      </div>
    </form>
  );
}
