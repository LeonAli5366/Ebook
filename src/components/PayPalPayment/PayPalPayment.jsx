import { PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContex } from "../../contextApi/UserContex";
// import { useSelector } from "react-redux";

const PayPalPayment = (product) => {
  const { price, discount, _id } = product.product.product;
  // const AllItem = useSelector((state) => {
  //   return state.cart;
  // });
  const { user } = useContext(AuthContex);

  const serverUrl = "http://localhost:5000";
  const discountedPrice = (price - parseInt((price * discount) / 100)).toFixed(
    2
  );

  const createOrder = async () => {
    // Order is created on the server and the order id is returned
    return await fetch(`${serverUrl}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        cart: {
          subtotal: discountedPrice,
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };
  const onApprove = async (data) => {
    // Order is captured on the server and the response is returned to the browser
    return await fetch(`${serverUrl}/api/orders/${data.orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => {
        console.log("payment");
        return response.json();
      })
      .then((data) => {
        if (data.status === "COMPLETED") {
          fetch(`${serverUrl}/api/v1/order/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: _id,
              email: user.email,
            }),
          })
            .then((res) => {
              return res.json();
            })
            .then(() => {
              toast.success("Your payment successful",{
                duration: 2000
              });
            });
        }
      });
  };
  return (
    <PayPalButtons
      className="w-full"
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PayPalPayment;
