import React from 'react';
import { Monitor, Smartphone, Code, Eye, Save, Share, Settings } from 'lucide-react';

interface ToolbarProps {
  device: 'desktop' | 'mobile';
  onDeviceChange: (device: 'desktop' | 'mobile') => void;
  onCodeClick: () => void;
  onPreviewClick: () => void;
  onSettingsClick: () => void;
  onSaveClick: () => void;
  onPublishClick: () => void;
}

export function Toolbar({
  device,
  onDeviceChange,
  onCodeClick,
  onPreviewClick,
  onSettingsClick,
  onSaveClick,
  onPublishClick,
}: ToolbarProps) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <button
            onClick={() => onDeviceChange('desktop')}
            className={`p-2 rounded ${
              device === 'desktop'
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Monitor className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDeviceChange('mobile')}
            className={`p-2 rounded ${
              device === 'mobile'
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Smartphone className="h-5 w-5" />
          </button>
        </div>

        <div className="h-6 w-px bg-gray-200" />

        <button
          onClick={onCodeClick}
          className="p-2 text-gray-500 hover:text-gray-700 rounded"
        >
          <Code className="h-5 w-5" />
        </button>

        <button
          onClick={onPreviewClick}
          className="p-2 text-gray-500 hover:text-gray-700 rounded"
        >
          <Eye className="h-5 w-5" />
        </button>

        <button
          onClick={onSettingsClick}
          className="p-2 text-gray-500 hover:text-gray-700 rounded"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={onSaveClick}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <Save className="h-4 w-4 mr-2" />
          Save
        </button>
        <button
          onClick={onPublishClick}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Share className="h-4 w-4 mr-2" />
          Publish
        </button>
      </div>
    </div>
  );
}