import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import UseCart from "../../../hooks/UseCart";
//TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = UseCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionTitle heading={"Payment"} subHeading={"Please process"} />
      <h3 className="text-3xl">Teka teka</h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} cart={cart} />
      </Elements>
    </div>
  );
};

export default Payment;
