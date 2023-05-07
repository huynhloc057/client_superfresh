import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import LayoutAnthentication from "../layouts/LayoutAnthentication";
import {
  sendOtpToEmail,
  updateForgetPassword,
} from "../app/features/authSlice";
import { emailSchema, passwordSchema } from "../validation/authValidation";
import { toast } from "react-toastify";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmShown, setConfirmShown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmVisibility = () => {
    setConfirmShown(confirmShown ? false : true);
  };

  const checkEmailValidation = (value) => {
    emailSchema
      .validate({ email: value })
      .then(() => setEmailValid(true))
      .catch(() => setEmailValid(false));
  };
  const checkPasswordValidation = (value) => {
    passwordSchema
      .validate({ password: value })
      .then(() => setPasswordValid(true))
      .catch(() => setPasswordValid(false));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { password, otp, email };
      const res = await dispatch(updateForgetPassword(payload)).unwrap();
      if (res.message) {
        toast.success("Đổi mật khẩu thành công !");
        navigate("/sign-in");
      } else {
        toast.error("Đã có lỗi xảy ra !");
      }
    } catch (err) {
      toast.error("Vui lòng kiểm tra lại !");
    }
  };

  const handleSendRequest = async (e) => {
    e.preventDefault();

    try {
      if (!emailValid && email === "") {
        toast.error("Vui lòng điền email hợp lệ!");
      } else {
        const res = await dispatch(sendOtpToEmail({ email })).unwrap();
        if (res.message) {
          toast.success("Mã OTP đã được gửi về email!");
          setShowResetPassword(true);
        } else {
          toast.error("Đã có lỗi xảy ra!");
        }
      }
    } catch (err) {
      toast.error("Email không tồn tại trong hệ thống!");
    }
  };
  return (
    <LayoutAnthentication heading="QUÊN MẬT KHẨU">
      <div className="w-full">
        <div className="">
          <div className="w-full align-middle border border-x-gray mt-10">
            <div className="row">
              <div className="wrapper-body">
                <form
                  className="form-control"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  {showResetPassword === false && (
                    <>
                      <div className="w-[360px] m-8 py-8 px-4 rounded-lg">
                        <input
                          className="flex w-full px-6 py-4 text-sm font-medium border rounded-lg 
         placeholder:text-text4 bg-transparent"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={(e) => checkEmailValidation(e.target.value)}
                          placeholder="Email của bạn"
                        />
                      </div>
                      {emailValid ? null : (
                        <div className="error-input">
                          Email không hợp lệ. Vui lòng nhập lại!
                        </div>
                      )}
                    </>
                  )}

                  {showResetPassword && (
                    <>
                      <div className="w-[360px] px-4 rounded-lg flex">
                        <span className="flex h-full text-center text-slate-400 px-1 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-key"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                          </svg>
                        </span>
                        <input
                          className="flex w-full px-6 py-4 text-sm font-medium border rounded-lg 
                          placeholder:text-text4 bg-transparent"
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Mã xác thực"
                        />
                      </div>
                      <div className="w-[360px] px-4 rounded-lg flex mt-3">
                        <span className="flex h-full text-center text-slate-400 px-1 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-shield-lock-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
                            />
                          </svg>
                        </span>
                        <input
                          className="flex w-full px-6 py-4 text-sm font-medium border rounded-lg 
                          placeholder:text-text4 bg-transparent"
                          type={passwordShown ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={(e) =>
                            checkPasswordValidation(e.target.value)
                          }
                          placeholder="Mật khẩu mới"
                        />
                        <span
                          className="p-2 cursor-pointer flex items-center"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordShown ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-eye-slash-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-eye-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                          )}
                        </span>
                      </div>
                      {passwordValid ? null : (
                        <div className="error-input">
                          Mật khẩu hợp lệ chứa từ 8-50 ký tự!
                        </div>
                      )}
                      <div className="w-[360px] px-4 rounded-lg flex mt-3">
                        <span className="flex h-full text-center text-slate-400 px-1 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-shield-lock-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
                            />
                          </svg>
                        </span>
                        <input
                          className="flex w-full px-6 py-4 text-sm font-medium border rounded-lg 
                           placeholder:text-text4 bg-transparent"
                          type={confirmShown ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Xác nhận mật khẩu"
                        />
                        <span
                          className="p-2 cursor-pointer flex items-center"
                          onClick={toggleConfirmVisibility}
                        >
                          {confirmShown ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye-slash-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                          )}
                        </span>
                      </div>
                    </>
                  )}

                  <div className="flex mt-5 justify-around pt-2 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-0 dark:text-white">
                    <Link
                      to="/sign-in"
                      className="font-medium text-[#008641] underline"
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      to="/sign-up"
                      className="font-medium text-[#008641] underline"
                    >
                      Đăng ký
                    </Link>
                  </div>
                  {showResetPassword ? (
                    <button
                      className="w-full text-white bg-[#008641] my-2  flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]"
                      type="submit"
                    >
                      Đặt lại mật khẩu
                    </button>
                  ) : (
                    <button
                      className="w-full text-white bg-[#008641] my-2  flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]"
                      onClick={(e) => handleSendRequest(e)}
                    >
                      Gửi yêu cầu
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAnthentication>
  );
};

export default Forget;
