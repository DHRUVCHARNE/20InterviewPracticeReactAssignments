import React from "react";
import Tabs from "./tabs";

function TabTest() {

    const tabs = [
        {
            label: 'Tab1'
            , content: <div>This is Content for Tab 1</div>
        },
        {
            label: 'Tab2'
            , content: <div>This is Content for Tab 2</div>
        },
        {
            label: 'Tab3'
            , content: <div>This is Content for Tab 3</div>
        },
        {
            label: 'Tab4'
            , content: <div>This is Content for Tab 4</div>
        },
    ]

    function handleChange(currTab) {
        console.log('Tab Changed to:', currTab);
  
    }

  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
}

export default TabTest;
