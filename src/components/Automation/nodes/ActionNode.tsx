import React from 'react';
import { Handle, Position } from 'reactflow';
import { Zap } from 'lucide-react';

interface ActionNodeProps {
  data: {
    label: string;
    description: string;
  };
}

export function ActionNode({ data }: ActionNodeProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-purple-500 min-w-[200px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="p-2 bg-purple-100 rounded-full">
            <Zap className="h-5 w-5 text-purple-600" />
          </div>
        </div>
        <div>
          <div className="font-medium text-gray-900">{data.label}</div>
          <div className="text-sm text-gray-500">{data.description}</div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
}