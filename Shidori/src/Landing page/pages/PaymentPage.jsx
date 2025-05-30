import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const API_BASE_URL = "http://localhost:8080/payments";

export default function PaymentPage() {
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/all`)
      .then((response) => response.json())
      .then((data) => {
        const transformedMethods = data.map((payment) => ({
          id: payment.paymentId,
          name: payment.paymentMethod.replace("_", " "),
          icon: getIcon(payment.paymentMethod),
          amount: payment.amount,
          status: payment.paymentStatus,
        }));
        setPaymentMethods(transformedMethods);
      })
      .catch((err) => console.error("Error fetching payments:", err));
  }, []);

  function getIcon(method) {
    switch (method) {
      case "WALLET":
        return <MdOutlineAccountBalanceWallet className="text-gray-600" />;
      case "CREDIT_CARD":
      case "DEBIT_CARD":
        return <BsBank className="text-gray-600" />;
      case "UPI":
        return <FaPlus className="text-orange-500" />;
      default:
        return null;
    }
  }

  const addPayment = () => {
    const newPayment = {
      user: { userId: 1 },
      order: { orderId: 101 },
      amount: 500.0,
      paymentMethod: "UPI",
      paymentStatus: "PENDING",
    };

    fetch(`${API_BASE_URL}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPayment),
    })
      .then((res) => res.json())
      .then((data) => {
        setPaymentMethods([...paymentMethods, {
          id: data.paymentId,
          name: data.paymentMethod.replace("_", " "),
          icon: getIcon(data.paymentMethod),
          amount: data.amount,
          status: data.paymentStatus,
        }]);
      })
      .catch((err) => console.error("Error creating payment:", err));
  };

  const deletePayment = (id) => {
    fetch(`${API_BASE_URL}/delete/${id}`, { method: "DELETE" })
      .then(() => {
        setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
      })
      .catch((err) => console.error("Error deleting payment:", err));
  };

  const updatePaymentStatus = (id, newStatus) => {
    fetch(`${API_BASE_URL}/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentStatus: newStatus }),
    })
      .then((res) => res.json())
      .then((updatedPayment) => {
        setPaymentMethods(paymentMethods.map((method) =>
          method.id === id ? { ...method, status: updatedPayment.paymentStatus } : method
        ));
      })
      .catch((err) => console.error("Error updating payment:", err));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="w-full max-w-3xl mt-6 bg-white shadow-md rounded-md p-6">
        <button className="flex items-center text-gray-600 mb-4">
          <FiArrowLeft className="mr-2" /> Payment Options
        </button>
        <p className="text-gray-700 text-sm">1 Item • Total: ₹91</p>

        <div className="mt-4 bg-gray-200 p-4 rounded-md">
          {paymentMethods.map((method) => (
            <div key={method.id} className="mt-2 bg-white p-3 rounded-md flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {method.icon}
                <span className="text-gray-700">{method.name} (₹{method.amount})</span>
                <span className={`ml-2 ${method.status === "COMPLETED" ? "text-green-600" : "text-red-500"}`}>
                  {method.status}
                </span>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => updatePaymentStatus(method.id, "COMPLETED")} className="text-green-500">
                  Mark as Paid
                </button>
                <button onClick={() => deletePayment(method.id)} className="text-red-500">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={addPayment} className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600 transition">
          Add Payment
        </button>
      </div>
    </div>
  );
}
