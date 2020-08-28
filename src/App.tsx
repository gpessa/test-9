import React from 'react';
import { PageChecksum, ScrollMore, PageSolution, PageListSplitter, PageAccountString, PageNumberTraslator } from './components';

function App() {
  return (
    <>
      <PageChecksum />
      <PageListSplitter />
      <PageAccountString />
      <PageNumberTraslator />
      <PageSolution />

      <ScrollMore />
    </>
  );
}

export default App;
