import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main className="main-content">
      <div className="container">
        {children}
      </div>
    </main>
  );
};

export default MainContent;
