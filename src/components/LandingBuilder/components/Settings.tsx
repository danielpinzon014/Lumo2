import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SettingsProps {
  editor: any;
  onClose: () => void;
}

export function Settings({ editor, onClose }: SettingsProps) {
  const [settings, setSettings] = useState({
    title: '',
    description: '',
    keywords: '',
    favicon: '',
  });

  const handleSave = () => {
    // Here you would typically save the settings
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-2/3 max-w-2xl">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium">Page Settings</h3>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Page Title
            </label>
            <input
              type="text"
              value={settings.title}
              onChange={(e) => setSettings({ ...settings, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Meta Description
            </label>
            <textarea
              value={settings.description}
              onChange={(e) => setSettings({ ...settings, description: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Meta Keywords
            </label>
            <input
              type="text"
              value={settings.keywords}
              onChange={(e) => setSettings({ ...settings, keywords: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Separate keywords with commas"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Favicon URL
            </label>
            <input
              type="text"
              value={settings.favicon}
              onChange={(e) => setSettings({ ...settings, favicon: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}