import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Email() {
  const formSchema = yup
    .object()
    .shape({
      newEmail: yup
        .string()
        .required("Vui lòng nhập email")
        .email("Vui lòng nhập email hợp lệ"),
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
      <div className="mt-2 mb-3 text-xl">Cập nhật email</div>
      <div className="flex items-center justify-center bg-white h-60">
        <div className="flex flex-col justify-between p-4 border-2 rounded w-96 h-fit border-slate-200">
          <div>
            <div className="text-sm">Địa chỉ email</div>
            <div className="flex items-center justify-center w-full px-1 mt-1 border-2 rounded border-slate-300 focus:to-blue-300 h-9">
              <img
                className="w-6 h-6"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                alt=""
              ></img>
              <input
                className="w-full pl-2 text-sm"
                type="text"
                name="email"
                id="editEmail"
                {...register("newEmail")}
                placeholder="Nhập email"
              ></input>
            </div>
            <div className="mt-1 mb-3 text-xs text-red-500">
              {errors.newEmail?.message}
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
