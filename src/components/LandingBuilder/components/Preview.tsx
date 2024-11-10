import React from 'react';
import { X } from 'lucide-react';

interface PreviewProps {
  editor: any;
  onClose: () => void;
}

export function Preview({ editor, onClose }: PreviewProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-3/4 h-3/4 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium">Preview</h3>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 p-4">
          <iframe
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <style>${editor?.getCss()}</style>
                </head>
                <body>${editor?.getHtml()}</body>
              </html>
            `}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}