import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import ReactFlow, { 
  Background,
  Controls,
  Panel,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge
} from 'reactflow';
import { ChevronLeft, Plus } from 'lucide-react';
import { TriggerNode } from './nodes/TriggerNode';
import { ActionNode } from './nodes/ActionNode';
import { ConditionNode } from './nodes/ConditionNode';
import 'reactflow/dist/style.css';

const nodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
  condition: ConditionNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'trigger',
    position: { x: 250, y: 50 },
    data: { 
      label: 'Start',
      description: 'When a customer completes a purchase',
      type: 'order-paid'
    },
  },
];

export function AutomationEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = (type: 'action' | 'condition') => {
    const newNode = {
      id: `${type}-${Date.now()}`,
      type,
      position: { 
        x: 250,
        y: (nodes.length + 1) * 150
      },
      data: {
        label: type === 'action' ? 'New Action' : 'New Condition',
        description: type === 'action' ? 'Configure this action' : 'Set up condition logic'
      },
    };

    setNodes((nds) => [...nds, newNode]);

    if (nodes.length > 0) {
      const lastNodeId = nodes[nodes.length - 1].id;
      const newEdge = {
        id: `e${lastNodeId}-${newNode.id}`,
        source: lastNodeId,
        target: newNode.id,
        type: 'smoothstep',
      };
      setEdges((eds) => [...eds, newEdge]);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/automation" className="mr-4">
                <ChevronLeft className="h-5 w-5 text-gray-500" />
              </Link>
              <h1 className="text-lg font-medium">New Automation</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-gray-50">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
          <Panel position="top-right" className="bg-white p-4 rounded-lg shadow-lg">
            <div className="space-y-2">
              <button
                onClick={() => addNode('action')}
                className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Action
              </button>
              <button
                onClick={() => addNode('condition')}
                className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Condition
              </button>
            </div>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
}