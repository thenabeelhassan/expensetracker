// src/components/HealthCheckWrapper.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/axios';
import Loader from './loader';

const HealthCheckWrapper = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [isHealthy, setIsHealthy] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkHealth = async () => {
        try {
            const res = await API.get('/health');
            console.log(res.data);
            if (res.status === 200) {
            setIsHealthy(true);
            } else {
            navigate('/error');
            }
        } catch (err) {
            if (err.response && err.response.status === 404) {
            navigate('/error');
            } else {
            console.error("Health check failed:", err);
            navigate('/error');
            }
        } finally {
            setChecking(false);
        }
    };


    checkHealth();
  }, [navigate]);

  if (checking) return <Loader />;
  if (!isHealthy) return null;

  return children;
};

export default HealthCheckWrapper;
