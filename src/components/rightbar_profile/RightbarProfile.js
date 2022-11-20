import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { getUserById, updateUserInfo } from "../../app/features/authSlice";
import { toast } from "react-toastify";
import FormContainer from "../form/FormContainer";

export default function Rightbar_Profile() {
  const { userInfo } = useSelector((state) => state.auth);
  const [isOpen, isOpenModal] = useState(false);
  const emailRef = useRef();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(userInfo?.user?.name);
  const [avatar, setAvatar] = useState(userInfo?.user?.profilePicture);
  const _id = userInfo?.user?._id;
  const { isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) dispatch(getUserById());
  }, [dispatch, isSuccess, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", username);
    form.append("profilePicture", avatar);
    dispatch(updateUserInfo({ form, toast }));
    dispatch(getUserById());
  };
  return (
    <div className="mr-32 basis-10/12" style={{ height: "700px" }}>
      <div className="mt-2 mb-3 text-xl">Thông tin tài khoản</div>
      <div>
        <div className="flex text-sm formProfile">
          <div
            className="p-4 bg-white basis-3/5 border border-dashed border-[#dcdcdc]"
            style={{ height: "500px" }}
          >
            <div className="text-lg my-2">Thông tin cá nhân</div>
            <FormContainer>
              <Form className="formContainer" onSubmit={submitHandler}>
                <Form.Group className="formGroup" controlId="username">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={username}
                    // value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="formGroup" controlId="avatar">
                  <Form.Label>Avatar</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={(e) => setAvatar(e.target.files[0])}
                  ></Form.Control>
                </Form.Group>
                <div className="buttonContainer">
                  <Button type="submit" variant="primary" className="mt-3">
                    Cập nhật
                  </Button>
                </div>
              </Form>
            </FormContainer>
          </div>

          <div className="flex-col p-4 ml-1 bg-white basis-2/5 h-[500px] border border-dashed border-[#dcdcdc]">
            <div className="flex justify-between flex-1 my-5">
              <div className="flex">
                <img
                  className="w-8 h-8 "
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                  alt=""
                ></img>
                <div className="flex-col ml-2">
                  <div>Địa chỉ email</div>
                  <input
                    type="text"
                    disabled="disabled"
                    className="disabled:bg-white"
                    defaultValue={`${userInfo?.user?.email}`}
                    ref={emailRef}
                  />
                </div>
              </div>
              <NavLink
                to="/profile/edit-email"
                className="flex items-center justify-center w-20 text-blue-500 border border-blue-500 rounded-md h-9"
              >
                <div>Cập nhật</div>
              </NavLink>
            </div>

            <div className="text-base">Bảo mật</div>
            <div className="flex justify-between flex-1 my-5">
              <div className="flex">
                <img
                  className="w-8 h-8 "
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png"
                  alt=""
                ></img>
                <div className="my-auto ml-2">Thiết lập mật khẩu</div>
              </div>
              <NavLink
                to="/profile/edit-password"
                className="flex items-center justify-center w-20 text-blue-500 border border-blue-500 rounded-md h-9"
              >
                <div>Cập nhật</div>
              </NavLink>
            </div>

            <div className="text-base">Liên kết mạng xã hội</div>
            <div className="flex justify-between flex-1 my-5">
              <div className="flex">
                <img
                  className="w-8 h-8 "
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png"
                  alt=""
                ></img>
                <div className="my-auto ml-2">Facebook</div>
              </div>
              <button
                type="button"
                className="w-20 text-blue-500 border border-blue-500 rounded-md py-auto h-9 "
              >
                Liên kết
              </button>
            </div>

            <div className="flex justify-between flex-1 my-5">
              <div className="flex">
                <img
                  className="w-8 h-8 "
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png"
                  alt=""
                ></img>
                <div className="my-auto ml-2">Google</div>
              </div>
              <button
                type="button"
                className="w-20 text-blue-500 border border-blue-500 rounded-md h-9 "
              >
                Liên kết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
