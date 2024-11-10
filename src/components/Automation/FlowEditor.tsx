import React from 'react';
import { NodeData } from './AutomationEditor';
import { Play, CheckCircle2, Zap, Plus } from 'lucide-react';

interface FlowEditorProps {
  nodes: NodeData[];
  onNodeSelect: (node: NodeData) => void;
  onAddCondition: (condition: NodeData) => void;
}

export function FlowEditor({ nodes, onNodeSelect, onAddCondition }: FlowEditorProps) {
  const handleAddCondition = () => {
    const newCondition: NodeData = {
      id: `condition-${Date.now()}`,
      type: 'condition',
      title: 'Check if...',
      description: 'Add a condition',
    };
    onAddCondition(newCondition);
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'trigger':
        return <Play className="h-5 w-5 text-blue-500" />;
      case 'condition':
        return <CheckCircle2 className="h-5 w-5 text-yellow-500" />;
      case 'action':
        return <Zap className="h-5 w-5 text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[600px] p-8">
      <div className="space-y-6">
        {nodes.map((node, index) => (
          <div key={node.id} className="relative">
            <div
              className="flex items-start space-x-4"
              onClick={() => onNodeSelect(node)}
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                  {getNodeIcon(node.type)}
                </div>
                {index < nodes.length - 1 && (
                  <div className="absolute top-8 left-4 w-0.5 h-16 bg-gray-200" />
                )}
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-500 cursor-pointer">
                  <div className="font-medium text-gray-900">{node.title}</div>
                  {node.description && (
                    <div className="mt-1 text-sm text-gray-500">
                      {node.description}
                    </div>
                  )}
                </div>
                {node.type === 'condition' && (
                  <div className="mt-4 ml-8 space-y-4">
                    <div className="text-sm font-medium text-gray-500">Then</div>
                    <div className="text-sm font-medium text-gray-500">Otherwise</div>
                  </div>
                )}
              </div>
            </div>

            {index === nodes.length - 1 && (
              <div className="absolute -bottom-12 left-4">
                <button
                  onClick={handleAddCondition}
                  className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add step</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}