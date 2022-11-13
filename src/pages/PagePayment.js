import clsx from "clsx";
import CheckConnection from "../components/HOC/CheckConnection";
import {
  HeaderPayment,
  FooterPayment,
  PaymentContent,
} from "../components/payment";

function PagePayment() {
  return (
    <CheckConnection>
      <div
        className={clsx("bg-white", {
          "h-[100vh]": false,
        })}
      >
        <HeaderPayment />
        <PaymentContent />
        <FooterPayment />
      </div>
    </CheckConnection>
  );
}

export default PagePayment;
