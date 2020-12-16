import React from 'react';
import PageRouter from 'PageRouter';
import { Header } from 'Pages/Constants';

function App() {
  return (
    <div className="App">
        <Header />
        <div id="scrollBody">
          <PageRouter />
        </div>
    </div>
  );
}

export default App;
