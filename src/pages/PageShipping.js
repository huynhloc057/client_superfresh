import clsx from "clsx";
import CheckConnection from "../components/HOC/CheckConnection";
import { HeaderPayment, FooterPayment } from "../components/payment";
import { ShippingContent } from "../components/shipping/shipping_content";

function PageShipping() {
  return (
    <CheckConnection>
      <div
        className={clsx("bg-[#f5f5fa]", {
          "h-[100vh]": true,
        })}
      >
        <HeaderPayment />
        <ShippingContent />
        <FooterPayment />
      </div>
    </CheckConnection>
  );
}

export default PageShipping;
