import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sidebar from './Components/sidebar';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4"><Sidebar/></div>
      </div>
    </div>
  );
}

export default App;
