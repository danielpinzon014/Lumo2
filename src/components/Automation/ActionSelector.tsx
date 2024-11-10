import React from 'react';
import { NodeData } from './AutomationEditor';
import { Tag, Mail, Bell, Gift, MessageSquare, Users } from 'lucide-react';

interface ActionSelectorProps {
  onSelect: (action: NodeData) => void;
}

const actions = [
  {
    id: 'send-email',
    title: 'Send email',
    description: 'Send an email to the customer',
    icon: Mail,
  },
  {
    id: 'add-tag',
    title: 'Add customer tags',
    description: 'Add tags to customer profile',
    icon: Tag,
  },
  {
    id: 'remove-tag',
    title: 'Remove customer tags',
    description: 'Remove tags from customer profile',
    icon: Tag,
  },
  {
    id: 'notification',
    title: 'Send notification',
    description: 'Send internal notification',
    icon: Bell,
  },
  {
    id: 'reward-points',
    title: 'Reward points',
    description: 'Add reward points to customer',
    icon: Gift,
  },
  {
    id: 'slack-message',
    title: 'Send Slack message',
    description: 'Send message to Slack channel',
    icon: MessageSquare,
  },
  {
    id: 'segment',
    title: 'Add to segment',
    description: 'Add customer to a segment',
    icon: Users,
  },
];

export function ActionSelector({ onSelect }: ActionSelectorProps) {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Do this...
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => (
          <button
            key={action.id}
            className="relative rounded-lg border border-gray-200 bg-white p-6 text-left shadow-sm hover:border-blue-500 focus:outline-none"
            onClick={() =>
              onSelect({
                id: action.id,
                type: 'action',
                title: action.title,
                description: action.description,
              })
            }
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <action.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{action.title}</div>
                <div className="mt-1 text-sm text-gray-500">
                  {action.description}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}