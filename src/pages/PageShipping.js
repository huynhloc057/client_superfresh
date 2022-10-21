import clsx from "clsx";
import { HeaderPayment, FooterPayment } from "../components/payment";
import { ShippingContent } from "../components/shipping/shipping_content";

function PageShipping() {
  return (
    <div
      className={clsx("bg-[#f5f5fa]", {
        "h-[100vh]": true,
      })}
    >
      <HeaderPayment />
      <ShippingContent />
      <FooterPayment />
    </div>
  );
}

export default PageShipping;
