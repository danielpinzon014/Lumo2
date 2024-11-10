import React from 'react';
import { NodeData } from '../types';
import { 
  Play, 
  CheckCircle2, 
  Mail, 
  Tag, 
  Bell, 
  MessageSquare,
  Users,
  Clock,
  ChevronRight
} from 'lucide-react';

interface NodeProps {
  node: NodeData;
  isSelected: boolean;
  onSelect: () => void;
}

export function Node({ node, isSelected, onSelect }: NodeProps) {
  const getNodeIcon = () => {
    switch (node.type) {
      case 'trigger':
        return <Play className="w-5 h-5 text-blue-500" />;
      case 'condition':
        return <CheckCircle2 className="w-5 h-5 text-yellow-500" />;
      case 'action':
        switch (node.actionType) {
          case 'send-email':
            return <Mail className="w-5 h-5 text-purple-500" />;
          case 'add-tag':
          case 'remove-tag':
            return <Tag className="w-5 h-5 text-green-500" />;
          case 'notification':
            return <Bell className="w-5 h-5 text-red-500" />;
          case 'slack-message':
            return <MessageSquare className="w-5 h-5 text-blue-500" />;
          case 'segment':
            return <Users className="w-5 h-5 text-indigo-500" />;
          case 'delay':
            return <Clock className="w-5 h-5 text-gray-500" />;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  const getNodeNumber = () => {
    switch (node.type) {
      case 'trigger':
        return '1';
      case 'action':
        return '2';
      case 'condition':
        return '3';
      default:
        return '';
    }
  };

  return (
    <button
      onClick={onSelect}
      className={`
        w-full text-left rounded-lg p-4 transition-all
        ${isSelected 
          ? 'ring-2 ring-indigo-500 bg-white shadow-md' 
          : 'bg-white shadow-sm hover:shadow-md border border-gray-200'
        }
      `}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            {getNodeIcon()}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center">
                <span className="text-xs font-medium text-gray-500">
                  {getNodeNumber()}. {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {node.title || 'Configure this step'}
              </h3>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
          {node.config && (
            <div className="mt-1 text-sm text-gray-500">
              {node.type === 'condition' && (
                <div className="flex items-center gap-1">
                  <span>{node.config.field}</span>
                  <span>{node.config.operator}</span>
                  <span>{node.config.value}</span>
                </div>
              )}
              {node.type === 'action' && node.actionType === 'delay' && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Wait {node.config.delay} {node.config.delayUnit}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}