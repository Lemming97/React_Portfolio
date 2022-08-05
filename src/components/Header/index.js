import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        currentTab,
        handleTabChange,
    
      } = props;

      return (


        <header className="flex-row px-1">
    <div>
        <h1>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera"> 📸</span> Lindsey Martin's Portfolio
          </a>
        </h1>
    </div>
            <div>
                <Nav
                    currentTab={currentTab}
                    handleTabChange={handleTabChange}
                ></Nav>
            </div>
        </header>
    );
}


export default Header;
