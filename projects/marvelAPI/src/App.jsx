import { useState, useEffect } from 'react';
import md5 from 'md5';
import Search from './Components/Search';

function App() {
  return (
    <>
      <h1>Marvel API</h1>
      <Search/>
    </>
  );
}

export default App;
