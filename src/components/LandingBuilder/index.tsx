import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingList } from './LandingList';
import { LandingEditor } from './LandingEditor';

export function LandingBuilder() {
  return (
    <Routes>
      <Route path="/" element={<LandingList />} />
      <Route path="/editor" element={<LandingEditor />} />
      <Route path="/editor/:id" element={<LandingEditor />} />
    </Routes>
  );
}
