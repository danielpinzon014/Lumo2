import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AutomationList } from './AutomationList';
import { AutomationEditor } from './AutomationEditor';

export function Automation() {
  return (
    <Routes>
      <Route path="/" element={<AutomationList />} />
      <Route path="/editor" element={<AutomationEditor />} />
    </Routes>
  );
}