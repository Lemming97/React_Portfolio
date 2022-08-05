import React, { useState } from 'react';
import Header from '../src/components/Header';
import About from '../src/components/About';
import './App.css';

function App() {
  const [currentTab, handleTabChange] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      default:
        return null;
    }
  };
  return (
    <div>
			<div>
				<Header currentTab={currentTab} handleTabChange={handleTabChange}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
      {/* <div>
        <Footer></Footer>
      </div> */}
		</div>
  );
}

export default App;