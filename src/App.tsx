import React from 'react';
import { PageChecksum, PageSolution, PageListSplitter, PageAccountString, PageNumberTraslator } from './components';

function App() {
  return (
    <div className="App">
      <PageChecksum />
      <PageListSplitter />
      <PageAccountString />
      <PageNumberTraslator />
      <PageSolution />
    </div>
  );
}

export default App;
