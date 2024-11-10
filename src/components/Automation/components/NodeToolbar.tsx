import React from 'react';
import { useReactFlow, useStore } from 'reactflow';
import { Trash2, Settings } from 'lucide-react';
import { useFlowStore } from '../store';

export function NodeToolbar() {
  const { getNode } = useReactFlow();
  const selectedNodes = useStore((state) => 
    state.nodeInternals.filter((node) => node.selected)
  );
  const { removeNode } = useFlowStore();

  if (selectedNodes.length === 0) return null;

  const node = getNode(selectedNodes[0].id);
  if (!node) return null;

  return (
    <div
      className="absolute bg-white rounded-lg shadow-lg p-2 flex space-x-2"
      style={{
        top: node.position.y - 40,
        left: node.position.x,
      }}
    >
      <button
        onClick={() => {}}
        className="p-1 hover:bg-gray-100 rounded"
        title="Settings"
      >
        <Settings className="h-4 w-4 text-gray-600" />
      </button>
      <button
        onClick={() => removeNode(node.id)}
        className="p-1 hover:bg-red-100 rounded"
        title="Delete"
      >
        <Trash2 className="h-4 w-4 text-red-600" />
      </button>
    </div>
  );
}