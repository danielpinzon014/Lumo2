import React from 'react';
import { NodeData } from './AutomationEditor';
import { ShoppingCart, Mail, User, Calendar, DollarSign } from 'lucide-react';

interface TriggerSelectorProps {
  onSelect: (trigger: NodeData) => void;
}

const triggers = [
  {
    id: 'order-paid',
    title: 'Order paid',
    description: 'When a customer completes a purchase',
    icon: DollarSign,
  },
  {
    id: 'cart-abandoned',
    title: 'Cart abandoned',
    description: 'When a customer leaves items in their cart',
    icon: ShoppingCart,
  },
  {
    id: 'email-opened',
    title: 'Email opened',
    description: 'When a customer opens a specific email',
    icon: Mail,
  },
  {
    id: 'customer-created',
    title: 'Customer created',
    description: 'When a new customer signs up',
    icon: User,
  },
  {
    id: 'scheduled',
    title: 'Scheduled',
    description: 'Run at a specific time or date',
    icon: Calendar,
  },
];

export function TriggerSelector({ onSelect }: TriggerSelectorProps) {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Start when...
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {triggers.map((trigger) => (
          <button
            key={trigger.id}
            className="relative rounded-lg border border-gray-200 bg-white p-6 text-left shadow-sm hover:border-blue-500 focus:outline-none"
            onClick={() =>
              onSelect({
                id: trigger.id,
                type: 'trigger',
                title: trigger.title,
                description: trigger.description,
              })
            }
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <trigger.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{trigger.title}</div>
                <div className="mt-1 text-sm text-gray-500">
                  {trigger.description}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}