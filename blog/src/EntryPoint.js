import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Page from './Page';

export default function EntryPoint() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page" element={<Page />} />
    </Routes>
  );
}
