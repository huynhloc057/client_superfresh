import React from "react";
import { Link } from "react-router-dom";
import youtube from "../../image/youtube.png";
import facebook from "../../image/facebook.png";
import twitter from "../../image/twitter.png";
import certificate from "../../image/certificate.png";
import logo from "../../image/logo.png";
import place from "../../image/place.svg";
import phone from "../../image/phone.svg";
import email from "../../image/email.svg";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex max-w-[1270px] w-full px-4 justify-between py-8 mx-auto border-t border-dashed border-[#dcdcdc]">
        <div className="flex-1 max-w-[268px] px-2">
          <img
            className="h-[80px] w-[140px] mx-auto mb-2"
            src={logo}
            alt="logo"
          />
          <p className="text-justify mb-2 text-[14px]">
            Super Fresh - Nơi cung cấp các loại nông sản sạch, an toàn và bổ
            dưỡng theo tiêu chuẩn VietGAP.
          </p>
          <div className="mb-2 text-justify">
            <img className="inline-block" src={place} alt="" />
            <p className="inline text-[14px]">
              Địa chỉ: 01 Võ Văn Ngân - Linh Chiểu - Thành phố Thủ Đức - Thành
              phố Hồ Chí Minh
            </p>
          </div>
          <div className="mb-2 text-justify">
            <img className="inline-block" src={phone} alt="" />
            <p className="inline text-[14px]">Số điện thoại: 0865765201</p>
          </div>
          <div className="mb-2 text-justify">
            <img className="inline-block" src={email} alt="" />
            <p className="inline text-[14px]">Email: superfresh@gmail.com</p>
          </div>
        </div>

        <div className="flex-1 max-w-[268px] px-2">
          <h4 className="mb-1 text-base font-semibold text-textfooter">
            Về chúng tôi
          </h4>
          <div className="grid grid-cols-1 gap-1 text-gray-500">
            <a className="text-[14px] mb-2" href="/#">
              Giới thiệu về Super Fresh
            </a>
            <a className="text-[14px] mb-2" href="/#">
              Liên hệ
            </a>
            <a className="text-[14px] mb-2" href="/#">
              Liên kết
            </a>
            <a className="text-[14px] mb-2" href="/#">
              Truy xuất nguồn gốc
            </a>
            <a className="text-[14px] mb-2" href="/#">
              Khách hàng thân thiết
            </a>
          </div>
          <h4 className="mb-3 mt-8 text-base font-semibold text-textfooter">
            Kết nối với chúng tôi
          </h4>
          <div className="grid grid-cols-5 gap-2">
            <Link to={"#"}>
              <img className="h-10" alt="facebook" src={facebook} />{" "}
            </Link>
            <Link to={"#"}>
              <img className="h-10" alt="youtube" src={youtube} />{" "}
            </Link>
            <Link to={"#"}>
              <img className="h-10" alt="twitter" src={twitter} />{" "}
            </Link>
          </div>
        </div>

        <div className="flex-1 max-w-[268px] px-2">
          <h4 className="mb-3 text-base font-semibold text-textfooter">
            Hỗ trợ khách hàng
          </h4>
          <div className="grid grid-cols-1 gap-1 text-xs text-gray-500">
            <a className="inline text-[14px] mb-2" href="/#">
              Các câu hỏi thường gặp
            </a>
            <a className="inline text-[14px] mb-2" href="/#">
              Gửi yêu cầu hỗ trợ
            </a>
            <a className="inline text-[14px] mb-2" href="/#">
              Hướng dẫn đặt hàng
            </a>
            <a className="inline text-[14px] mb-2" href="/#">
              Hướng dẫn dùng khuyến mãi
            </a>
            <a className="inline text-[14px] mb-2" href="/#">
              Hướng dẫn kiểm tra đơn hàng
            </a>
          </div>
          <img
            className="h-[60px] w-[150px]"
            src={certificate}
            alt="cnbocongthuong"
          />
        </div>

        <div className="flex-1 max-w-[268px] px-2">
          <h4 className="mb-3 text-base font-semibold text-textfooter">
            Địa chỉ cửa hàng
          </h4>

          <div class="aa-contact-map">
            <iframe
            title="contact"
            className="w-[250px] h-[250px] border-[#008440] border-[2px] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4842318813353!2d106.76973361462129!3d10.85072666078536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1636705454227!5m2!1svi!2s"

            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full h-10 bg-[#008641] mx-auto">
        <h4 className="text-white text-center leading-10">Copyright © 2022 Super Fresh</h4>
      </div>
    </div>
  );
};

export default Footer;
