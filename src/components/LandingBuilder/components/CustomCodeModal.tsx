import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CustomCodeModalProps {
  editor: any;
  onClose: () => void;
}

export function CustomCodeModal({ editor, onClose }: CustomCodeModalProps) {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  useEffect(() => {
    if (editor) {
      setHtml(editor.getHtml());
      setCss(editor.getCss());
      setJs(editor.getJs());
    }
  }, [editor]);

  const handleApply = () => {
    if (editor) {
      editor.setComponents(html);
      editor.setStyle(css);
      // Set JS if your editor supports it
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-3/4 h-3/4 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium">Custom Code</h3>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 p-4 grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              HTML
            </label>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md font-mono text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CSS
            </label>
            <textarea
              value={css}
              onChange={(e) => setCss(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md font-mono text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JavaScript
            </label>
            <textarea
              value={js}
              onChange={(e) => setJs(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md font-mono text-sm"
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
            onClick={handleApply}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}