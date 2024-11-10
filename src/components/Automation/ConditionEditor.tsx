import React from 'react';
import { NodeData } from './AutomationEditor';

interface ConditionEditorProps {
  node: NodeData;
  onUpdate: (node: NodeData) => void;
}

export function ConditionEditor({ node, onUpdate }: ConditionEditorProps) {
  const handleConfigChange = (config: any) => {
    onUpdate({
      ...node,
      config,
    });
  };

  if (node.type === 'condition') {
    return (
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Configure Condition
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Field
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={node.config?.field || ''}
              onChange={(e) =>
                handleConfigChange({ ...node.config, field: e.target.value })
              }
            >
              <option value="">Select field</option>
              <option value="amount">Order Amount</option>
              <option value="items">Number of Items</option>
              <option value="customer_type">Customer Type</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Operator
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={node.config?.operator || ''}
              onChange={(e) =>
                handleConfigChange({ ...node.config, operator: e.target.value })
              }
            >
              <option value="">Select operator</option>
              <option value="equals">Equals</option>
              <option value="greater_than">Greater than</option>
              <option value="less_than">Less than</option>
              <option value="contains">Contains</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Value
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={node.config?.value || ''}
              onChange={(e) =>
                handleConfigChange({ ...node.config, value: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    );
  }

  if (node.type === 'action') {
    return (
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Configure Action
        </h3>
        {node.id === 'send-email' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Template
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={node.config?.template || ''}
                onChange={(e) =>
                  handleConfigChange({ ...node.config, template: e.target.value })
                }
              >
                <option value="">Select template</option>
                <option value="welcome">Welcome Email</option>
                <option value="order_confirmation">Order Confirmation</option>
                <option value="abandoned_cart">Abandoned Cart</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Delay
              </label>
              <div className="mt-1 flex items-center space-x-2">
                <input
                  type="number"
                  className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={node.config?.delay || ''}
                  onChange={(e) =>
                    handleConfigChange({
                      ...node.config,
                      delay: e.target.value,
                    })
                  }
                />
                <select
                  className="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={node.config?.delayUnit || 'minutes'}
                  onChange={(e) =>
                    handleConfigChange({
                      ...node.config,
                      delayUnit: e.target.value,
                    })
                  }
                >
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {(node.id === 'add-tag' || node.id === 'remove-tag') && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter tags separated by commas"
                value={node.config?.tags || ''}
                onChange={(e) =>
                  handleConfigChange({ ...node.config, tags: e.target.value })
                }
              />
            </div>
          </div>
        )}

        {node.id === 'reward-points' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Points
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={node.config?.points || ''}
                onChange={(e) =>
                  handleConfigChange({ ...node.config, points: e.target.value })
                }
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}