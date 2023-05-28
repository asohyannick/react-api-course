import React from 'react';
import {
  Navbar,
  Announcement 
} from './components';
import  Instance  from './api/Instance';
function App() {
  return (
    <>
      <Instance/>
      <Navbar/>
      <Announcement/>
    </>
  );
}

export default App;
