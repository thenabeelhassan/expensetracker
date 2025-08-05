import React from 'react';

export default function ErrorPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Server Unavailable</h1>
      <p>We're having trouble connecting to the backend. Please try again later.</p>
    </div>
  );
}
