import React, { useState } from "react";
import "./tabs.css";
import "./tab-test";

function Tabs({ tabsContent, onChange }) {
  const [currTab, setCurrTab] = useState(0);

  function handleOnClick(getIndex) {
    setCurrTab(getIndex);
    onChange(getIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currTab === index ? "active" : ""}`}
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currTab] && tabsContent[currTab].content}
      </div>
    </div>
  );
}

export default Tabs;
