import { PaymentProduct } from "./product";

function PaymentProducts({ datas }) {
  return (
    <ul className="grid gap-5">
      {datas.map((item, index) => (
        <PaymentProduct key={index} data={item} />
      ))}
    </ul>
  );
}

export default PaymentProducts;
