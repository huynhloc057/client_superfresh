import React, { useState } from "react";
import IconQuitCross from "../icons/IconQuitCross";

import Avatar from "react-avatar-edit";
import Axios from "axios";

export default function ChangeAvatarModal({ isOpen, changeAvatar }) {
  const [src] = useState(null);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const handleSubmit = () => {
    if (preview !== null) changeAvatar(preview);
    const formData = new FormData();
    formData.append("file", preview);
    formData.append("upload_preset", "qdwxfssh");
    Axios.post(
      "https://api.cloudinary.com/v1_1/ddlhbgn3z/image/upload",
      formData
    ).then((response) => {
      changeAvatar(response.data.url);
    });
    isOpen(false);
  };

  return (
    <div
      className=" z-[1000] bg-black bg-opacity-40 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full justify-center items-center flex "
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full h-full max-w-2xl p-4 md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 mx-10 border-b rounded-t border-slate-300 dark:border-gray-600">
            <div className="text-xl text-gray-900 dark:text-white">
              Cập nhật ảnh đại diện
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => isOpen(false)}
            >
              <IconQuitCross></IconQuitCross>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-center m-4 bg-gray h-96 p-7">
              <Avatar
                width={500}
                height={300}
                onClose={onClose}
                onCrop={onCrop}
                src={src}
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mx-10 space-x-2 border-t rounded-b border-slate-300 dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSubmit}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
