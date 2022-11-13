import useToggleValue from "../hooks/useToggleValue";
import React, { useEffect } from "react";
import LayoutAnthentication from "../layouts/LayoutAnthentication";
import FormGroup from "../components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IconEyeToggle } from "../components/icons";
import { Button } from "../components/button";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import { toast } from "react-toastify";
import {
  loginByGoogle,
  register,
  resetError,
  setPassword,
} from "../app/features/authSlice";
import GoogleLogin from "react-google-login";
import CheckConnection from "../components/HOC/CheckConnection";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Vui lòng nhập tên tài khoản"),
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

const SignUpPage = () => {
  const { isLoading, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleSignUp = (formValue) => {
    dispatch(setPassword(formValue?.password));
    dispatch(register({ formValue, navigate, toast }));
  };
  const handleLoginByGoogle = async (googleData) => {
    await dispatch(loginByGoogle({ token: googleData.tokenId }));
    navigate("/");
  };

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId:
          "1032921802021-3v44l6mpbiikeiqbuo1pn0ji25tsr809.apps.googleusercontent.com",
      });
    });
    if (errorMessage !== null) {
      toast.error(errorMessage);
      dispatch(resetError());
    }
  }, [dispatch, errorMessage]);

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue(false);
  return (
    <CheckConnection>
      <LayoutAnthentication heading="ĐĂNG KÝ TÀI KHOẢN">
        <form onSubmit={handleSubmit(handleSignUp)} method="post">
          <FormGroup>
            <Label htmlFor="name">Tên tài khoản *</Label>
            <Input
              control={control}
              name="name"
              placeholder="Jhon Doe"
              autoComplete="off"
              error={errors.name?.message}
            ></Input>
          </FormGroup>
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
              placeholder="Create a password"
              error={errors.password?.message}
            >
              <IconEyeToggle
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconEyeToggle>
            </Input>
          </FormGroup>
          <div className="flex items-center justify-center w-full py-3 text-base font-semibold rounded-lg gap-x-3 text-text2 dark:text-white dark:border-darkStroke">
            <GoogleLogin
              clientId="1032921802021-3v44l6mpbiikeiqbuo1pn0ji25tsr809.apps.googleusercontent.com"
              buttonText="Đăng nhập bằng Google"
              onSuccess={handleLoginByGoogle}
              onFailure={() => alert("Đăng nhập không thành công")}
              // onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <Button type="submit" className="w-full bg-[#008641] my-2 rounded-lg">
            {isLoading ? (
              <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent"></div>
            ) : (
              "Đăng ký"
            )}
          </Button>
          <p className="pt-2 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-0">
            Nếu đã có tài khoản?{"  "}
            <Link
              to="/sign-in"
              className="font-medium underline text-[#008641]"
            >
              Đăng nhập
            </Link>
          </p>
        </form>
      </LayoutAnthentication>
    </CheckConnection>
  );
};

export default SignUpPage;
