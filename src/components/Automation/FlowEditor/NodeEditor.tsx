import React from 'react';
import { NodeData, ActionType } from '../types';
import { 
  Mail, 
  Tag, 
  Bell, 
  MessageSquare, 
  Users,
  Clock,
  Trash2
} from 'lucide-react';

interface NodeEditorProps {
  node: NodeData;
  onUpdate: (node: NodeData) => void;
  onDelete: (nodeId: string) => void;
}

export function NodeEditor({ node, onUpdate, onDelete }: NodeEditorProps) {
  const handleConfigChange = (config: any) => {
    onUpdate({
      ...node,
      config: { ...node.config, ...config }
    });
  };

  const handleActionTypeChange = (actionType: ActionType) => {
    onUpdate({
      ...node,
      actionType,
      config: {} // Reset config when changing action type
    });
  };

  if (node.type === 'trigger') {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Trigger Settings</h3>
          <button
            onClick={() => onDelete(node.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-full"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Event</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={node.config?.event}
              onChange={(e) => handleConfigChange({ event: e.target.value })}
            >
              <option value="">Select event</option>
              <option value="order_paid">Order paid</option>
              <option value="cart_abandoned">Cart abandoned</option>
              <option value="email_opened">Email opened</option>
              <option value="customer_created">Customer created</option>
            </select>
          </div>
        </div>
      </div>
    );
  }

  if (node.type === 'condition') {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Condition Settings</h3>
          <button
            onClick={() => onDelete(node.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-full"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Field</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={node.config?.field}
              onChange={(e) => handleConfigChange({ field: e.target.value })}
            >
              <option value="">Select field</option>
              <option value="email">Email</option>
              <option value="tags">Tags</option>
              <option value="total_orders">Total Orders</option>
              <option value="last_purchase">Last Purchase</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Operator</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={node.config?.operator}
              onChange={(e) => handleConfigChange({ operator: e.target.value })}
            >
              <option value="">Select operator</option>
              <option value="equals">Equals</option>
              <option value="not_equals">Does not equal</option>
              <option value="contains">Contains</option>
              <option value="not_contains">Does not contain</option>
              <option value="greater_than">Greater than</option>
              <option value="less_than">Less than</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Value</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={node.config?.value || ''}
              onChange={(e) => handleConfigChange({ value: e.target.value })}
              placeholder="Enter value"
            />
          </div>
        </div>
      </div>
    );
  }

  if (node.type === 'action') {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Action Settings</h3>
          <button
            onClick={() => onDelete(node.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-full"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Action Type</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <button
                onClick={() => handleActionTypeChange('send-email')}
                className={`p-2 flex flex-col items-center rounded-lg border ${
                  node.actionType === 'send-email'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="mt-1 text-xs">Send Email</span>
              </button>
              <button
                onClick={() => handleActionTypeChange('add-tag')}
                className={`p-2 flex flex-col items-center rounded-lg border ${
                  node.actionType === 'add-tag'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Tag className="w-5 h-5 text-gray-500" />
                <span className="mt-1 text-xs">Add Tag</span>
              </button>
              <button
                onClick={() => handleActionTypeChange('notification')}
                className={`p-2 flex flex-col items-center rounded-lg border ${
                  node.actionType === 'notification'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Bell className="w-5 h-5 text-gray-500" />
                <span className="mt-1 text-xs">Notification</span>
              </button>
              <button
                onClick={() => handleActionTypeChange('slack-message')}
                className={`p-2 flex flex-col items-center rounded-lg border ${
                  node.actionType === 'slack-message'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <MessageSquare className="w-5 h-5 text-gray-500" />
                <span className="mt-1 text-xs">Slack Message</span>
              </button>
              <button
                onClick={() => handleActionTypeChange('segment')}
                className={`p-2 flex flex-col items-center rounded-lg border ${
                  node.actionType === 'segment'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Users className="w-5 h-5 text-gray-500" />
                <span className="mt-1 text-xs">Segment</span>
              </button>
              <button
                onClick={() => handleActionTypeChange('delay')}
                className={`p-2 flex flex-col items-center rounded-lg border ${
                  node.actionType === 'delay'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="mt-1 text-xs">Delay</span>
              </button>
            </div>
          </div>

          {node.actionType === 'send-email' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Template</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={node.config?.template}
                onChange={(e) => handleConfigChange({ template: e.target.value })}
              >
                <option value="">Select template</option>
                <option value="welcome">Welcome Email</option>
                <option value="abandoned_cart">Abandoned Cart</option>
                <option value="order_confirmation">Order Confirmation</option>
              </select>
            </div>
          )}

          {node.actionType === 'delay' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={node.config?.delay || ''}
                  onChange={(e) => handleConfigChange({ delay: parseInt(e.target.value) })}
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Unit</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={node.config?.delayUnit}
                  onChange={(e) => handleConfigChange({ delayUnit: e.target.value })}
                >
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                </select>
              </div>
            </div>
          )}

          {(node.actionType === 'add-tag' || node.actionType === 'remove-tag') && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Tags</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={node.config?.tags || ''}
                onChange={(e) => handleConfigChange({ tags: e.target.value })}
                placeholder="Enter tags (comma separated)"
              />
            </div>
          )}

          {node.actionType === 'notification' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={node.config?.message || ''}
                onChange={(e) => handleConfigChange({ message: e.target.value })}
                rows={3}
                placeholder="Enter notification message"
              />
            </div>
          )}

          {node.actionType === 'slack-message' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Channel</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={node.config?.channelId || ''}
                  onChange={(e) => handleConfigChange({ channelId: e.target.value })}
                  placeholder="Enter channel (e.g. #sales)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={node.config?.message || ''}
                  onChange={(e) => handleConfigChange({ message: e.target.value })}
                  rows={3}
                  placeholder="Enter Slack message"
                />
              </div>
            </>
          )}

          {node.actionType === 'segment' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Segment</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={node.config?.segmentId}
                onChange={(e) => handleConfigChange({ segmentId: e.target.value })}
              >
                <option value="">Select segment</option>
                <option value="high_value">High Value Customers</option>
                <option value="at_risk">At Risk Customers</option>
                <option value="new_customers">New Customers</option>
              </select>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}