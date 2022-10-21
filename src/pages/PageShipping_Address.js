import { HeaderPayment, FooterPayment } from "../components/payment";
import { ShippingForm } from "../components/shipping/shipping_content";

function PageShipping_Address() {
  return (
    <div>
      <HeaderPayment />
      <ShippingForm />
      <FooterPayment />
    </div>
  );
}

export default PageShipping_Address;
