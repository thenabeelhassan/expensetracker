import React, { useEffect, useState } from 'react';
import API from '../utils/axios';
import '../styles/dashboard.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTransactions();
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const res = await API.get('/auth/me'); 
      setUser(res.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      navigate('/login');
    }
  };

  const fetchTransactions = async () => {
    try {
      const res = await API.get('/expenses');
      setTransactions(res.data);

      // Calculate balance
      const total = res.data.reduce((acc, tx) => acc + tx.amount, 0);
      setBalance(total);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) {
        navigate('/login');
      }
    }
  };

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    try {
      const newTx = { description, amount: parseFloat(amount) };
      const res = await API.post('/expenses', newTx);
      setTransactions([...transactions, res.data]);
      setBalance(balance + res.data.amount);
      setDescription('');
      setAmount('');
      fetchTransactions();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelTransaction = async (e, id) => {
    try {
      console.log(id);
      await API.delete(`/expenses/${id}`);
      fetchTransactions();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>
          <FontAwesomeIcon icon="user" />
          {user ? user.name : 'Loading...'}
        </h2>
        <button className="logout-btn" onClick={handleLogout}>
          <FontAwesomeIcon icon="sign-out-alt" />
          Logout
        </button>
      </header>
      <h1>Expense Tracker</h1>

      <main className="dashboard-main">
        <section className="balance-section">
          <h2>Your Balance</h2>
          <p>${balance.toFixed(2)}</p>
        </section>

        <section className="add-expense-section">
          <h3>Add New Transaction</h3>
          <form onSubmit={handleAddTransaction}>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <button type="submit">
              <FontAwesomeIcon icon="plus" />
              Add Transaction
            </button>
          </form>
        </section>

        <section className="transactions-section">
          <h3>Transaction History</h3>
          <ul>
            {transactions.map((tx) => (
              <li key={tx._id}>
                <span><FontAwesomeIcon icon="money-bill-wave" />{tx.description}</span>
                <span>
                  {tx.amount >= 0 ? '+' : ''}{tx.amount}
                  <span className='transaction-del-btn' onClick={(e) => handleDelTransaction(e, tx._id)}>
                    <FontAwesomeIcon icon="trash" />
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
