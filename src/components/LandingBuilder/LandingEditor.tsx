import React from 'react';
import { useParams } from 'react-router-dom';
import { LandingBuilder } from './LandingBuilder';

export function LandingEditor() {
  const { id } = useParams();

  return <LandingBuilder existingId={id} />;
}
