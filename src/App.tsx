import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MainLayoutComponent from './components/layout/main-layout.component';

const App: React.FC = () => {
  const props = {
    name: 'Chris'
  }
  return (
    <div className="App">
      <MainLayoutComponent {...props} />
    </div>
  );
}

export default App;
