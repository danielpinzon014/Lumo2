import React, { useState } from 'react';
import { NodeData } from '../types';
import { Node } from './Node';
import { Connection } from './Connection';
import { Plus, Zap, Settings2 } from 'lucide-react';

interface CanvasProps {
  nodes: NodeData[];
  onNodeSelect: (node: NodeData) => void;
  onAddNode: (type: 'action' | 'condition', position: { x: number, y: number }) => void;
  selectedNodeId: string | null;
  connections: Array<{ from: string; to: string }>;
}

export function Canvas({ 
  nodes, 
  onNodeSelect, 
  onAddNode,
  selectedNodeId,
  connections 
}: CanvasProps) {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleAddClick = (e: React.MouseEvent, position: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({ 
      x: rect.left + window.scrollX,
      y: rect.bottom + window.scrollY 
    });
    setShowAddMenu(true);
  };

  const addNode = (type: 'action' | 'condition') => {
    const position = nodes.length * 120;
    onAddNode(type, { x: 0, y: position });
    setShowAddMenu(false);
  };

  return (
    <div className="flex-1 bg-gray-50 p-8 overflow-auto">
      <div className="max-w-3xl mx-auto">
        {nodes.length === 0 ? (
          <div className="text-center py-12">
            <Zap className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">Start Your Automation</h3>
            <p className="mt-1 text-sm text-gray-500">Choose a trigger to begin your automation flow</p>
            <div className="mt-6">
              <button
                onClick={() => addNode('trigger')}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Trigger
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {nodes.map((node, index) => (
              <div key={node.id} className="relative">
                <Node
                  node={node}
                  isSelected={node.id === selectedNodeId}
                  onSelect={() => onNodeSelect(node)}
                />
                
                {index < nodes.length - 1 && (
                  <div className="absolute left-1/2 -ml-0.5 w-1 h-12 bg-gray-200" />
                )}

                {index < nodes.length - 1 && (
                  <div className="absolute left-1/2 -ml-4 -bottom-8 z-10">
                    <button
                      onClick={(e) => handleAddClick(e, index)}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
                    >
                      <Plus className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-center pt-6">
              <button
                onClick={(e) => handleAddClick(e, nodes.length)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Step
              </button>
            </div>
          </div>
        )}

        {showAddMenu && (
          <div
            className="absolute bg-white rounded-lg shadow-lg border border-gray-200 w-64 z-50"
            style={{ top: menuPosition.y, left: menuPosition.x }}
          >
            <div className="p-2">
              <button
                onClick={() => addNode('action')}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-md flex items-center"
              >
                <Zap className="h-5 w-5 mr-2 text-indigo-500" />
                <span>Add Action</span>
              </button>
              <button
                onClick={() => addNode('condition')}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-md flex items-center"
              >
                <Settings2 className="h-5 w-5 mr-2 text-yellow-500" />
                <span>Add Condition</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}