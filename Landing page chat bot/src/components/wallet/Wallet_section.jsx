import { useState } from "react";
import { Wallet, PlusCircle, User, Gift, CreditCard, MapPin, RefreshCcw, Home, ShoppingCart, Ticket, Menu } from "lucide-react";
import logo from './newlogo.png';

const WalletSection = () => {
  const [balance, setBalance] = useState(500);
  const [menuOpen, setMenuOpen] = useState(false);
  const transactions = [
    { id: 1, type: "Added", amount: 200, date: "Mar 1, 2025" },
    { id: 2, type: "Spent", amount: 150, date: "Feb 28, 2025" },
    { id: 3, type: "Added", amount: 300, date: "Feb 25, 2025" },
  ];

  const handleTopUp = () => {
    setBalance(balance + 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar Menu (Always Visible) */}
      <aside className="w-64 bg-white shadow-md p-6 h-screen fixed hidden md:flex flex-col">
        <img src={logo} alt="Taste of India Logo" className="h-12 mb-6" />
        <nav className="flex flex-col gap-4 text-gray-700">
          <button className="flex items-center gap-2 hover:text-orange-600"><User /> Profile</button>
          <button className="flex items-center gap-2 hover:text-orange-600"><Gift /> Offers</button>
          <button className="flex items-center gap-2 hover:text-orange-600"><CreditCard /> Subscriptions</button>
          <button className="flex items-center gap-2 hover:text-orange-600"><MapPin /> Address</button>
          <button className="flex items-center gap-2 hover:text-orange-600"><RefreshCcw /> Change Address</button>
        </nav>
      </aside>

      <main className="flex-1 md:ml-64 w-full">
        {/* Navbar (Fixed Top, Full Width) */}
        <header className="bg-orange-600 bg-opacity-90 shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
          <img src={logo} alt="Taste of India Logo" className="h-10 ml-6" />
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
          <nav className={`flex flex-col md:flex-row gap-6 text-white text-sm md:text-base absolute md:static bg-orange-600 md:bg-transparent w-full md:w-auto top-full left-0 p-4 md:p-0 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
            <button className="flex items-center gap-2 hover:text-gray-300"><Home /> Home</button>
            <button className="flex items-center gap-2 hover:text-gray-300"><Gift /> Offers</button>
            <button className="flex items-center gap-2 hover:text-gray-300"><CreditCard /> Subscription</button>
            <button className="flex items-center gap-2 hover:text-gray-300"><ShoppingCart /> Cart</button>
          </nav>
        </header>

        {/* Wallet Section */}
        <section className="max-w-lg mx-auto p-6 pt-24 bg-white rounded-2xl shadow-md border border-orange-300 mt-20 w-full md:w-3/4">
          {/* Wallet Balance */}
          <div className="bg-orange-500 text-white p-6 rounded-xl text-center shadow-lg">
            <p className="text-lg">Available Balance</p>
            <h1 className="text-4xl font-bold">₹{balance}</h1>
          </div>

          {/* Transaction History */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Transaction History</h3>
            <ul className="mt-2 space-y-2">
              {transactions.map((txn) => (
                <li key={txn.id} className="flex justify-between p-3 rounded-lg border shadow-sm bg-gray-100">
                  <span className={txn.type === "Added" ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                    {txn.type} ₹{txn.amount}
                  </span>
                  <span className="text-gray-500 text-sm">{txn.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top-Up Button */}
          <button
            className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 shadow-md"
            onClick={handleTopUp}
          >
            <PlusCircle className="w-5 h-5" /> Top-Up Wallet
          </button>

          {/* Vouchers & Coupons Section */}
          <div className="mt-6 p-4 bg-gray-50 border border-orange-300 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Vouchers & Coupons</h3>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center gap-2">
              <Ticket className="w-5 h-5" /> View Offers
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WalletSection;
