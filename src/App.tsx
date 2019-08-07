import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MainLayoutComponent from './components/layout/main-layout.component';

const App: React.FC = () => {

  return (
    <div className="App">
      <MainLayoutComponent />
    </div>
  );
}

export default App;
