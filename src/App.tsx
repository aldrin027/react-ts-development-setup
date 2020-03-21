import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header>React Typescript</Header>
      <Main>Main Body</Main>
      <Footer>Footer</Footer>
    </div>
  );
};

export default App;
