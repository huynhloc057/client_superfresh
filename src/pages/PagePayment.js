import clsx from "clsx";
import {
  HeaderPayment,
  FooterPayment,
  PaymentContent,
} from "../components/payment";

function PagePayment() {
  return (
    <div
      className={clsx("bg-white", {
        "h-[100vh]": false,
      })}
    >
      <HeaderPayment />
      <PaymentContent />
      <FooterPayment />
    </div>
  );
}

export default PagePayment;
