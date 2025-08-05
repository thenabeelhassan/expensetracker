import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleDashboardRedirect = () => {
    navigate('/dashboard');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Expense Tracker</h1>
        <p className="tagline">Your personal finance dashboard, simplified.</p>
      </header>

      <section className="features">
        <h2>Why Use Expense Tracker?</h2>
        <ul>
          <li><strong>💰 Track Expenses:</strong> Log and categorize all your expenses with ease.</li>
          <li><strong>📊 Visual Insights:</strong> Understand your spending with real-time charts and stats.</li>
          <li><strong>🔐 Secure & Private:</strong> Your data stays protected and encrypted.</li>
          <li><strong>📱 Responsive Design:</strong> Access it from desktop, tablet, or mobile seamlessly.</li>
        </ul>
      </section>

      <button className="dashboard-button" onClick={handleDashboardRedirect}>
        Go to Dashboard
      </button>

      <footer className="footer">
        <p>Made with ❤️ by Nabeel Hassan | <a href="https://devopsmedium.com" target="_blank" rel="noopener noreferrer">DevOps Medium</a></p>
      </footer>
    </div>
  );
};

export default Home;

