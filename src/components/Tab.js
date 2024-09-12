import React, { useState } from 'react';

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tab-list">
        <ul>
        {tabs.map((tab, index) => (
          <li key={index}
          className={`tab-button ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
            {tab.title}
          </li>
        ))}
        </ul>
      </div>

      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tab;
