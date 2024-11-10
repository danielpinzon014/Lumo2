import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Campaigns } from './components/Campaigns';
import { EmailBuilderComponent } from './components/EmailBuilder/EmailBuilder';
import { LandingBuilder } from './components/LandingBuilder';
import { Automation } from './components/Automation';
import { CRM } from './components/CRM';
import { Assets } from './components/Assets';
import { Profile } from './components/Profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/campaigns/*" element={<Campaigns />} />
        <Route path="/email-builder" element={<EmailBuilderComponent />} />
        <Route path="/landing-builder/*" element={<LandingBuilder />} />
        <Route path="/automation/*" element={<Automation />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
