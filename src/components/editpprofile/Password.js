import React from "react";
import IconEyeToggle from "../icons/IconEyeToggle";
import useToggleValue from "../../hooks/useToggleValue";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Password() {
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue(false);

  const formSchema = yup
    .object()
    .shape({
      password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .max(32, "Mật khẩu phải dài từ 8 đến 32 ký tự")
        .min(8, "Mật khẩu phải dài từ 8 đến 32 ký tự"),
      confirmPwd: yup
        .string()
        .oneOf([yup.ref("password")], "Mật khẩu không trùng khớp"),
    })
    .required();

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mr-32 basis-10/12"
      style={{ height: "700px" }}
    >
      <div className="mt-2 mb-3 text-xl">Thiết lập mật khẩu</div>
      <div className="flex items-center justify-center bg-white h-80">
        <div className="flex flex-col justify-between p-4 border-2 rounded w-96 h-fit border-slate-200 ">
          <div>
            <div className="text-sm">Mật khẩu mới</div>
            <div className="flex items-center justify-center w-full px-1 mt-1 border-2 rounded border-slate-300 focus:to-blue-300 h-9">
              <input
                className="w-full pl-2 text-sm"
                name="password"
                id="password"
                {...register("password")}
                type={`${showPassword ? "text" : "password"}`}
                maxLength={32}
                placeholder="Nhập lại mật khẩu mới"
              ></input>
              <IconEyeToggle
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconEyeToggle>
            </div>

            <div className="mt-1 mb-3 text-xs text-red-500">
              {errors.password?.message}
            </div>

            <div className="text-sm">Nhập lại mật khẩu mới</div>
            <div className="flex items-center justify-center w-full px-1 mt-1 border-2 rounded border-slate-300 focus:to-blue-300 h-9">
              <input
                className="w-full pl-2 text-sm"
                name="confirmPwd"
                id="confirmPwd"
                {...register("confirmPwd")}
                type={`${showPassword ? "text" : "password"}`}
                maxLength={32}
                placeholder="Nhập lại mật khẩu mới"
              ></input>
              <IconEyeToggle
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconEyeToggle>
            </div>
            <div className="mt-1 mb-3 text-xs text-red-500">
              {errors.confirmPwd?.message}
            </div>
          </div>

          <button className="flex items-center justify-center w-full h-10 mt-3 text-white bg-blue-500 rounded">
            Lưu thay đổi
          </button>
        </div>
      </div>
    </form>
  );
}
