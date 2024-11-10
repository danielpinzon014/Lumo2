import React from 'react';
import { NodeData } from '../types';

interface ConnectionProps {
  fromNode: NodeData;
  toNode: NodeData;
}

export function Connection({ fromNode, toNode }: ConnectionProps) {
  const startX = (fromNode.position?.x || 0) + 240;
  const startY = (fromNode.position?.y || 0) + 32;
  const endX = toNode.position?.x || 0;
  const endY = toNode.position?.y || 0 + 32;

  const controlPoint1X = startX + (endX - startX) / 2;
  const controlPoint2X = controlPoint1X;

  return (
    <svg
      className="absolute top-0 left-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    >
      <path
        d={`M ${startX} ${startY} C ${controlPoint1X} ${startY}, ${controlPoint2X} ${endY}, ${endX} ${endY}`}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
    </svg>
  );
}