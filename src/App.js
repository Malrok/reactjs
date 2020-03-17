import React from 'react';
import List from './pages/list/list';
import Detail from './pages/detail/detail';
import { Router } from '@reach/router';

function App() {
  return (
    <Router>
      <List path="/"/>
      <Detail path="detail/:userId"/>
    </Router>
  );
}

export default App;
