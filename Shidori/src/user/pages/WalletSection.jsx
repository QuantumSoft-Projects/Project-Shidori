import { useState } from "react";
import { Banknote, Coins, Gift } from "lucide-react";
import '../styles/walletSection.css';

const WalletSection = () => {
  const [balance, setBalance] = useState(500);
  const [loyaltyPoints, setLoyaltyPoints] = useState(1250);
  const [giftCards, setGiftCards] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(0);

  const transactions = [
    { id: 1, type: "Added", amount: 200, date: "Mar 1, 2025" },
    { id: 2, type: "Spent", amount: 150, date: "Feb 28, 2025" },
    { id: 3, type: "Added", amount: 300, date: "Feb 25, 2025" },
  ];

  const handleRedeemPoints = () => {
    if (loyaltyPoints >= 500) {
      setBalance(balance + 50);
      setLoyaltyPoints(loyaltyPoints - 500);
    }
  };

  const handleAddGiftCard = () => {
    setGiftCards(giftCards + 1);
  };

  const handleAddFunds = () => {
    setBalance(balance + Number(amount));
    setShowModal(false);
    setAmount(0);
  };

  return (
    <div className="wallet-container">
      <section className="wallet-section">
        <h1 className="wallet-heading">My Wallet</h1>

        <div className="wallet-stats">
          <div className="wallet-card orange">
            <h2>Wallet Balance</h2>
            <p>₹{balance}</p>
            <button className="btn" onClick={() => setShowModal(true)}>
               Add Funds
            </button>
          </div>

          <div className="wallet-card green">
            <h2>Loyalty Points</h2>
            <p>{loyaltyPoints}</p>
            <button className="btn" onClick={handleRedeemPoints}>
               Redeem
            </button>
          </div>

          <div className="wallet-card blue">
            <h2>Gift Cards</h2>
            <p>{giftCards}</p>
            <button className="btn" onClick={handleAddGiftCard}>
             Add Gift Card
            </button>
          </div>
        </div>

        <div className="transaction-history">
          <h3>Transaction History</h3>
          <ul>
            {transactions.map((txn) => (
              <li key={txn.id} className="transaction-item">
                <span className={txn.type === "Added" ? "added" : "spent"}>
                  {txn.type} ₹{txn.amount}
                </span>
                <span>{txn.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Add Funds</h2>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
            />
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={handleAddFunds}>Add Funds</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletSection;
