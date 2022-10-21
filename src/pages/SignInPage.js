import React, { useEffect } from "react";
import LayoutAnthentication from "../layouts/LayoutAnthentication";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useToggleValue from "../hooks/useToggleValue";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import FormGroup from "../components/common/FormGroup";
import { IconEyeToggle } from "../components/icons";
import { Input } from "../components/input";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Label } from "../components/label";
import {
  login,
  loginByGoogle,
  resetError,
  setPassword,
} from "../app/features/authSlice";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Vui lòng nhập email hợp lệ"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(8, "Mật khẩu phải có độ dài tối đa 8 ký tự"),
  })
  .required();
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { isLoading, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (formValue) => {
    dispatch(setPassword(formValue?.password));
    dispatch(login({ formValue, navigate, toast }));
    if (errorMessage !== null) {
      toast.error(errorMessage);
      dispatch(resetError());
    }
  };
  const handleLoginByGoogle = async (googleData) => {
    await dispatch(loginByGoogle({ token: googleData.tokenId }));
    navigate("/");
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId:
          "1032921802021-3v44l6mpbiikeiqbuo1pn0ji25tsr809.apps.googleusercontent.com",
      });
    });
  }, []);

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue(false);
  return (
    <LayoutAnthentication heading="ĐĂNG NHẬP TÀI KHOẢN">
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
            autoComplete="off"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Nhập mật khẩu"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>

        {/* <FormGroup>
          <div className="text-right">
            <span className="inline-block w-full text-sm font-medium text-text2 dark:text-text3">
              Quên mật khẩu
            </span>
          </div>
        </FormGroup> */}
        <div
          className="flex items-center justify-center w-full py-3  text-base font-semibold 
       rounded-lg gap-x-3 text-text2 dark:text-white dark:border-darkStroke"
        >
          <GoogleLogin
            clientId="1032921802021-3v44l6mpbiikeiqbuo1pn0ji25tsr809.apps.googleusercontent.com"
            buttonText="Đăng nhập bằng Google"
            onSuccess={handleLoginByGoogle}
            // onFailure={() => alert("Đăng nhập không thành công")}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <Button type="submit" className="w-full bg-[#008641] my-2 rounded-lg">
          {isLoading ? (
            <div class="pointer-events-none spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent"></div>
          ) : (
            "Đăng nhập"
          )}
        </Button>
        <p className="text-xs pt-2 font-normal text-center lg:text-sm text-text3 lg:mb-0 dark:text-white">
          Khách hàng mới?{"  "}
          <Link to="/sign-up" className="font-medium text-[#008641] underline">
            Đăng ký
          </Link>
        </p>
        <p className="text-xs pt-2 font-normal text-center lg:text-sm text-text3 lg:mb-0 dark:text-white">
          Quên mật khẩu?{"  "}
          <Link to="/" className="font-medium text-[#008641] underline">
            Khôi phục mật khẩu
          </Link>
        </p>
        {/* <ButtonGoogle text="Đăng nhập bằng tài khoản Google"></ButtonGoogle> */}
      </form>
    </LayoutAnthentication>
  );
};

export default SignInPage;
