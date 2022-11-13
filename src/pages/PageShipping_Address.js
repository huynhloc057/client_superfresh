import CheckConnection from "../components/HOC/CheckConnection";
import { HeaderPayment, FooterPayment } from "../components/payment";
import { ShippingForm } from "../components/shipping/shipping_content";

function PageShipping_Address() {
  return (
    <CheckConnection>
      <div>
        <HeaderPayment />
        <ShippingForm />
        <FooterPayment />
      </div>
    </CheckConnection>
  );
}

export default PageShipping_Address;
