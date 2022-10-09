import PaymentContainer from "./components/PaymentContainer";
import PaymentForm from "./components/PaymentForm";
import CreditCard from "./components/CreditCard";

function App() {
  return (
    <PaymentContainer>
      <PaymentForm />
      <CreditCard />
    </PaymentContainer>
  );
}

export default App;
